import TrableApiUserModel, {TrableApiUser, TrableApiUserSchema} from "../models/auth/TrableApiUserModel";
import {TrableEntityType} from "../models/auth/TrableEntityType";
import currentEpochSeconds from "../utils/currentEpochSeconds";
import AuthController from "./AuthController";
import {ClientEnrollmentResponse} from "../models/device/ClientEnrollmentResponse";
import {NodeEnrollmentResponse} from "../models/device/NodeEnrollmentResponse";
import BLENodeModel, {BLENode} from "../models/device/BLENodeModel";
import Location from "../models/device/Location";
import permission from "../utils/permission";
import {hashids} from "../utils/hashIdUtil"
import logger from "../utils/logger";

export class DeviceController {

    private bleNodeCache: Map<string, BLENode> = new Map()

    private DEFAULT_CLIENT_PERMS: string[] = []
    private DEFAULT_NODE_PERMS: string[] = [permission.sensor.submitRSSI]

    public async createApiUserForClient(): Promise<ClientEnrollmentResponse> {

        const apiUser = await TrableApiUserModel.create({
            entityType: TrableEntityType.CLIENT,
            permissions: this.DEFAULT_CLIENT_PERMS,
            tokenLastIssued: currentEpochSeconds()
        })

        const apiKey = await AuthController.generateJWTfor(apiUser)

        // Need to do + "" so it's a string even when built to plain js, otherwise hashids will throw an error
        const bleAdvertisementId = hashids.encodeHex(apiUser._id + "")

        return {
            clientId: apiUser._id,
            bleAdvertisementId: bleAdvertisementId,
            apiKey: apiKey
        }
    }

    public async createApiUserForNode(displayName: string, location: Location): Promise<NodeEnrollmentResponse> {
        const apiUser = await TrableApiUserModel.create({
            entityType: TrableEntityType.NODE,
            permissions: this.DEFAULT_NODE_PERMS,
            tokenLastIssued: currentEpochSeconds()
        })

        const bleNode = await BLENodeModel.create({
            displayName: displayName,
            location: location,
            apiUserId: apiUser._id
        })

        const apiKey = await AuthController.generateJWTfor(apiUser)

        return {
            nodeId: bleNode.id,
            apiKey: apiKey
        }
    }

    public async getNodeFromCache(id: string): Promise<BLENode | undefined> {
        if (this.bleNodeCache.has(id)) {
            return this.bleNodeCache.get(id)
        }

        const bleNode = await BLENodeModel.findById(id).exec()
        if (!bleNode) {
            return undefined
        } else {
            return bleNode
        }

    }


    private apiUserNodeIdCache: Map<string, string> = new Map()

    public async getNodeFromApiUserId(apiUserId: string): Promise<BLENode | undefined> {
        if (this.apiUserNodeIdCache.has(apiUserId)) {
            const nodeId = this.apiUserNodeIdCache.get(apiUserId)
            return this.getNodeFromCache(nodeId!);
        }

        const bleNode = await BLENodeModel.findOne({apiUserId: apiUserId}).exec()
        if (bleNode == null) {
            logger.warn("Invalid Measurement Received: There is no BLENode corresponding to the API Client ID")
            return;
        }

        this.apiUserNodeIdCache.set(apiUserId, bleNode.id)
        return this.getNodeFromCache(apiUserId)
    }
}
export default new DeviceController()
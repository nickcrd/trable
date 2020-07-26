import TrableApiUserModel, {TrableApiUser} from "../models/auth/TrableApiUserModel";
import {TrableEntityType} from "../models/auth/TrableEntityType";
import currentEpochSeconds from "../utils/currentEpochSeconds";
import AuthController from "./AuthController";
import {ClientDeviceEnrollmentResponse} from "../models/device/ClientDeviceEnrollmentResponse";

export class DeviceController {

    private DEFAULT_CLIENT_PERMS: string[] = []

    constructor() {

    }

    public async createApiUserForClient(): Promise<ClientDeviceEnrollmentResponse> {
        const apiUser = await TrableApiUserModel.create({
            entityType: TrableEntityType.CLIENT,
            permissions: this.DEFAULT_CLIENT_PERMS,
            tokenLastIssued: currentEpochSeconds()
        })

        const apiKey = await AuthController.generateJWTfor(apiUser)

        return {
            clientId: apiUser._id,
            apiKey: apiKey
        }
    }


}

export default new DeviceController()
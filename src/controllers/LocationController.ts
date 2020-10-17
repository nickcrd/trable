import Location from "../models/device/Location";
import KalmanFilter from "../utils/KalmanFilter";
import logger from "../utils/logger";
import {TrableApiUser} from "../models/auth/TrableApiUserModel";
import DeviceController from "./DeviceController";
import BLENodeModel, {BLENode} from "../models/device/BLENodeModel";
import TrilaterationManager from "../math/TrilaterationManager";

class LocationController {

    public async submitNewMeasurement(apiUser: TrableApiUser, targetId: string, rssi1m: number, rssiMeasurements: number[], pathLossParam: number, timestamp?: number) {
        logger.info("Received new RSSI measurements { " + "target: " +  targetId + ", rssi1m: " + rssi1m + ", rssiMeasurements: " + rssiMeasurements + ", pathLossParam: " + pathLossParam + ",timestamp: " + timestamp + " }")

        const bleNode = await DeviceController.getNodeFromApiUserId(apiUser.id)
        if (bleNode == null) {
            logger.warn("Invalid Measurement Batch Received: There is no BLENode corresponding to the API Client ID")
            return;
        }

        TrilaterationManager.handleNewMeasurement(bleNode, targetId, rssiMeasurements, rssi1m, pathLossParam, timestamp)
    }
}

export default new LocationController()
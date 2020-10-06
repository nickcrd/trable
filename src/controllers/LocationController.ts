import Location from "../models/device/Location";
import KalmanFilter from "../utils/KalmanFilter";
import logger from "../utils/logger";
import {TrableApiUser} from "../models/auth/TrableApiUserModel";
import DeviceController from "./DeviceController";
import BLENodeModel, {BLENode} from "../models/device/BLENodeModel";
import TrilaterationManager from "../math/TrilaterationManager";

class LocationController {

    public async submitNewMeasurement(apiUser: TrableApiUser, targetId: string, txPower: number, rssi: number, timestamp?: number) {
        logger.debug("Received new RSSI measurement { " + "target: " +  targetId + ", txPower: " + txPower + ", rssi: " + rssi + ", timestamp: " + timestamp + " }")

        const bleNode = await DeviceController.getNodeFromApiUserId(apiUser.id)
        if (bleNode == null) {
            logger.warn("Invalid Measurement Received: There is no BLENode corresponding to the API Client ID")
            return;
        }

        TrilaterationManager.handleNewMeasurement(bleNode, targetId, rssi, txPower, timestamp)
    }
}

export default new LocationController()
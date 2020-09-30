import Location from "../models/device/Location";
import KalmanFilter from "../utils/KalmanFilter";
import logger from "../utils/logger";
import {TrableApiUser} from "../models/auth/TrableApiUserModel";
import DeviceController from "./DeviceController";
import BLENodeModel from "../models/device/BLENodeModel";

class LocationController {

//    private locationCache: [string: Location]

    public async submitNewMeasurement(apiUser: TrableApiUser, targetId: string, txPower: number, rssi: number, timestamp?: number) {
        logger.debug("Received new RSSI measurement { " + "target: " +  targetId + ", txPower: " + txPower + ", rssi: " + rssi + ", timestamp: " + timestamp + " }")

        const bleNode = await BLENodeModel.findOne({ apiUserId: apiUser.id }).exec()
        if (bleNode == null) {
            logger.warn("Invalid Measurement Recieved: There is no BLENode corresponding to the API Client ID")
            return;
        }



    }
}

export default new LocationController()
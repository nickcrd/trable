import Location from "../models/device/Location";
import KalmanFilter from "../utils/KalmanFilter";
import trableConfig from "../config/config";
import logger from "../utils/logger";

class LocationController {

//    private locationCache: [string: Location]

    public async submitNewMeasurement(targetId: string, txPower: number, rssi: number, timestamp: number) {
        logger.debug("Recieved new RSSI measurement { " + "target: " +  targetId + ", txPower: " + txPower + ", rssi: " + rssi + ", timestamp: " + timestamp + " }")
    }

    public async getLocation(id: string): Promise<Location> {
        // TODO: Method stub

        return { x: 0, y: 0, z: 0}
    }
}

export default new LocationController()
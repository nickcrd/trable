import KalmanFilter from "../../utils/KalmanFilter";
import {getDefaultKalmanFilter} from "../../utils/kalmanUtils";

export default class DistanceCalculationState {
    kalmanFilter: KalmanFilter
    rssiMeasurements: {timestamp: number, rssi: number}[] = []

    txPower: number
    pathLossParameter: number

    isMoving: boolean = false;
    movingScalar: number = 1

    constructor(txPower: number, pathLossParameterN: number, kalmanFilter?: KalmanFilter) {
        this.kalmanFilter = kalmanFilter ?? getDefaultKalmanFilter()
        this.txPower = txPower
        this.pathLossParameter = pathLossParameterN
    }

    addMeasurement(timestamp: number, rssi: number) {
        // Filter then push
        rssi = this.kalmanFilter.filter(rssi, (this.isMoving ? this.movingScalar : 0))
        this.rssiMeasurements.push({timestamp, rssi})
    }

    private averageRSSI(): number {
        var total = 0;
        this.rssiMeasurements.forEach(measurement => total += measurement.rssi)

        return total / this.rssiMeasurements.length;
    }

    async calculateDistanceInMeters(): Promise<number> {
        if (this.rssiMeasurements.length == 0) {
            throw NaN
        }

        // Old Calculation:
        // let distance = Math.pow(10, (this.txPower - this.averageRSSI()) / 20)  // 10^((txPower-rssi)/20)
        //  return distance / 1000

        let distance = Math.pow(10, (this.averageRSSI() - this.txPower) / (-10 * this.pathLossParameter)) // 10 ^ (RSSI-rssi1m/(-10n))
        return distance
    }

    public amountOfMeasurements() {
        return this.rssiMeasurements.length
    }

}
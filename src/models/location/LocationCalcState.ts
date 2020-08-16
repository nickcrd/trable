import KalmanFilter from "../../utils/KalmanFilter";
import {defaultKalmanFilter} from "../../utils/kalmanUtils";

export default class LocationCalcState {
    kalmanFilter: KalmanFilter
    rssiMeasurements: {timestamp: number, rssi: number}[] = []

    txPower: number

    isMoving: boolean = false;
    movingScalar: number = 1

    constructor(txPower: number, kalmanFilter?: KalmanFilter) {
        this.kalmanFilter = kalmanFilter ?? defaultKalmanFilter
        this.txPower = txPower
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

    // TODO: Improvements based on Research(?)
    async calculateDistanceInMeters(): Promise<number> {
        if (this.rssiMeasurements.length == 0) {
            throw NaN
        }

        let distance = Math.pow(10, (this.txPower - this.averageRSSI()) / 20)  // 10^((txPower-rssi)/20)
        return distance / 1000
    }

}
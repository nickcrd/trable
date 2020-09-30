import Location from "../models/device/Location";
import DistanceCalculationState from "./state/DistanceCalculationState";
import LocationCalcState from "./state/LocationCalcState";
import logger from "../utils/logger";
import SocketManager from "../sockets/SocketManager";
import {BLENode} from "../models/device/BLENodeModel";

export default class TrilaterationManager {

    private calculationStates: Map<string, LocationCalcState> = new Map()

    constructor() {
        setTimeout(this.calculationLoop, 10 * 1000)
    }

    public handleNewMeasurement(node: BLENode, clientId: string, rssi: number, txPower: number, timestamp: number) {
        if (!this.calculationStates.has(clientId)) {
            this.calculationStates.set(clientId, new LocationCalcState(clientId))
        }

        this.calculationStates.get(clientId)?.handleNewRSSIMeasurement(node, rssi, txPower, timestamp)
    }

    public async calculationLoop() {
        for (let [userId, calcState] of this.calculationStates) {
            try {
                const position = await calcState.calculatePosition()
                SocketManager.notifyClientPositionChange(userId, position)
            } catch (err) {
                logger.warn("Trilateration Failed: " + err.message)
            }

            if (calcState.shouldDiscardState()) {
                this.calculationStates.delete(userId)
            } else {
                calcState.resetState()
            }
        }
    }

}
import {BLENode} from "../../models/device/BLENodeModel";
import DistanceCalculationState from "./DistanceCalculationState";
import MathConstants from "../MathConstants";
import DeviceController from "../../controllers/DeviceController";
import Location from "../../models/device/Location";
import logger from "../../utils/logger";

export default class LocationCalcState {

    // Map: BLENode._id -> DistanceCalculationState
    private calculationStates: Map<string, DistanceCalculationState> = new Map()
    private userId: string

    private trilat = require('trilat')

    // Location Calc States are unique for each user
    constructor(userId: string) {
        this.userId = userId
    }

    public handleNewRSSIMeasurement(node: BLENode, rssi: number, txPower: number, timestamp: number) {
        if (this.calculationStates.has(node.id)) {
            // @ts-ignore
            this.calculationStates.get(node.id).addMeasurement(timestamp, rssi)
            return;
        }

        const distanceCalcState = new DistanceCalculationState(txPower, MathConstants.DEFAULT_PATH_LOSS_PARAMETER)
        distanceCalcState.addMeasurement(timestamp, rssi)

        this.calculationStates.set(node.id, distanceCalcState)
    }

    private async doTrilateration(distancesToNodes: Map<Location, number>): Promise<Location> {

        // The trilat module requires input to be an array containing [X of node location, Y of node location, Radius]
        let input: number[][] = []
        for (const [location, distance] of distancesToNodes) {
            input.push([location.x, location.y, distance])
        }

        logger.debug("Trilateration: Input is " + input)
        let output = await this.trilat(input)
        logger.debug("Result: " +output)

        return { x: output[0], y: output[1], z: 0 }
    }

    public async calculatePosition(): Promise<Location> {

        // TODO: Filter measurements to only include ones with atleast MathConstants.MINIMUM_RSSI_MEASUREMENTS
        // const calcStates = Array.from(this.calculationStates.values())
        //     .filter((calcState) => calcState.amountOfMeasurements() >= MathConstants.MINIMUM_RSSI_MEASUREMENTS)

        var distancesMap: Map<Location, number> = new Map()
        for (const [nodeId, calcState] of this.calculationStates) {
            const distance = await calcState.calculateDistanceInMeters()

            const bleNode = await DeviceController.getNodeFromCache(nodeId)
            if (bleNode == undefined) {
                continue
            }

            distancesMap.set(bleNode.location, distance)
        }

        if (distancesMap.size < 3) {
            throw Error("Not enough nodes to perform trilateration for user " + this.userId + " (Needs at least 3 nodes)")
        }

        return this.doTrilateration(distancesMap)
    }

    public shouldDiscardState(): boolean {
        return (this.calculationStates.size == 0)
    }

    public resetState() {
        this.calculationStates = new Map()
    }
}
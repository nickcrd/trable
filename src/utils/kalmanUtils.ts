import {BLENode} from "../models/device/BLENodeModel";
import KalmanFilter from "./KalmanFilter";
import {config} from "node-config-ts";

var kalmanFiltersMap: Map<string, KalmanFilter> = new Map()

export const getDefaultKalmanFilter = () => {
    return new KalmanFilter({ R: config.nodeConfig.kalman.R, Q: config.nodeConfig.kalman.Q })
}

/** @deprecated */
export function getKalmanFilter(node: BLENode) {
    if (!kalmanFiltersMap.has(node._id)) {
       kalmanFiltersMap.set(node._id, getDefaultKalmanFilter())
    }
    return kalmanFiltersMap.get(node._id)
}
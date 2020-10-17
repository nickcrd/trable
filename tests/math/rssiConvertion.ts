import * as mocha from 'mocha';
import { expect } from 'chai'
import DistanceCalculationState from "../../src/math/state/DistanceCalculationState";
import logger from "../../src/utils/logger";

describe("RSSI Convertion", () => {

    it("should calculate distance of measurements taken at 2m correctly", async () => {

        const rssiAt1m = -36.5
        const measurementsAt2m = [ -57,-56,-56,-56,-56,-56,-56,-56,-55,-55,-55,-55,-55,-55,-55,-56,-58,-58,-59,-60,-60,-60,-60,-59,-59,-59,-59,-59,-58,-58,-52,-52,-53,-53,-54,-55,-38,-40,-41,-43,-45,-47,-47,-48,-48,-48,-49,-49,-50,-50,-52,-53,-53,-53,-53,-52,-54,-55,-56,-57,-56,-56,-56,-56,-57,-58,-58,-58,-57,-56,-56,-55,-55,-54,-54,-55,-55,-55,-56,-55,-56,-55,-55,-56,-56,-56,-55,-55,-55,-56,-57,-57,-58,-57,-57,-57,-58,-59,-59,-58,-58,-57,-56,-57,-58,-58,-58,-59,-59,-59,-58,-58,-58,-59,-60,-61,-62,-66,-66]

        await doCalculationTestCase(measurementsAt2m, rssiAt1m, 4.8, 2)
    })


    it("should calculate distance of measurements taken at 4m correctly", async () => {

        //const measurementsAt1m = [ 76,60,62,49,52,40,29,35,25,16,8,0,-8,3,-3,-8,-13,-17,-20,-24,-28,-30,-32,-46,-46,-47,-48,-32,-34,-35,-35,-37,-37,-39,-40,-25,-28,-15,-19,-21,-24,-26,-29,-31,-34,-35,-36,-38,-38,-39,-24,-27,-14,-17,-21,-25,-28,-31,-32,-33,-34,-36,-37,-39,-39,-40,-25,-28,-31,-34,-35,-36,-37,-38,-39,-40,-41,-43,-28,-29,-32,-34,-36,-38,-44,-44,-45,-46,-45,-45,-44,-44,-45,-46];
        const rssiAt1m = -36.5
        const measurementsAt4m = [ -70,-70,-69,-69,-69,-68,-68,-67,-67,-67,-68,-68,-68,-67,-67,-67,-67,-66,-66,-65,-65,-65,-65,-65,-65,-64,-64,-64,-63,-63,-63,-63,-63,-64,-64,-64,-64,-64,-64,-65,-65,-64,-64,-65,-65,-65,-64,-64,-64,-64,-64,-64,-64,-63,-65,-65,-65,-65,-65,-65,-65,-64,-63,-63,-62,-62,-62,-61,-61,-61,-60,-60,-60,-60,-60,-61,-62,-62,-62,-63,-63,-64,-64,-64,-64,-64,-64,-64,-64,-64,-64,-64,-64,-63,-63,-62,-63,-63,-63,-63,-64,-64,-64,-64,-64,-63,-63,-62,-62,-62,-63,-63,-63,-64,-64,-64,-64,-64];

        await doCalculationTestCase(measurementsAt4m, rssiAt1m, 4.8, 4)
    })





})

async function doCalculationTestCase(measurements: number[], rssiAt1m: number, pathLossParam: number, expectedResult: number) {

    const calcState = new DistanceCalculationState(rssiAt1m, pathLossParam)

    measurements.forEach(measurement => calcState.addMeasurement(measurement))

    // @ts-ignore
    logger.debug("Avg RSSI: " + calcState.averageRSSI())

    const distance = await calcState.calculateDistanceInMeters()

    expect(distance).to.be.closeTo(expectedResult, 0.5)
};

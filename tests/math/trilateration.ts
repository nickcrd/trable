import * as mocha from 'mocha';
import { expect } from 'chai'
import LocationCalcState from "../../src/math/state/LocationCalcState";
import Location from "../../src/models/device/Location";

describe('LocationCalcState', () => {
    it('should calculate trilateration example 1 correctly (Intersection is area)', async () => {

        const locCalcState = new LocationCalcState("")
        let distances: Map<Location, number> = new Map()

        distances.set({ x: 1.98, y: 1.6, z: 0}, 5.11) // A
        distances.set({ x: 4.57, y: 8.48, z: 0}, 4.4) // B
        distances.set({ x: 12, y: 4, z: 0}, 6.84) // C

        // @ts-ignore
        const result = await locCalcState.doTrilateration(distances)

        expect(result.x).to.closeTo(5.62, 0.02)
        expect(result.y).to.closeTo(4.54, 0.02)
    });

    it('should calculate trilateration example 2 correctly (A on 0,0)', async () => {

        const locCalcState = new LocationCalcState("")
        let distances: Map<Location, number> = new Map()

        distances.set({ x: 0, y: 0, z: 0}, 7.71) // A
        distances.set({ x: 4.57, y: 8.48, z: 0}, 4.4) // B
        distances.set({ x: 12, y: 4, z: 0}, 6.84) // C

        // @ts-ignore
        const result = await locCalcState.doTrilateration(distances)

        expect(result.x).to.be.closeTo(5.63, 0.02)
        expect(result.y).to.be.closeTo(4.56, 0.02)
    });


    it('should calculate trilateration example 3 correctly (A on 0,0; Circles intersect in one point)', async () => {

        const locCalcState = new LocationCalcState("")
        let distances: Map<Location, number> = new Map()

        distances.set({ x: 0, y: 0, z: 0}, 7.71) // A
        distances.set({ x: 4.57, y: 8.48, z: 0}, 3) // B
        distances.set({ x: 12, y: 4, z: 0}, 6.84) // C

        // @ts-ignore
        const result = await locCalcState.doTrilateration(distances)

        expect(result.x).to.be.closeTo(5.33, 0.02)
        expect(result.y).to.be.closeTo(5.57, 0.02)
    });

    it("aa", async () => {
        const locCalcState = new LocationCalcState("");

        let distances: Map<Location, number> = new Map()

        distances.set({ x: 1, y: 1, z: 0}, 4.93) // A
        distances.set({ x: 4.58, y: 8.49, z: 0}, 3) // B
        distances.set({ x: 12, y: 4, z: 0}, 6.84) // C

        // @ts-ignore
        const result = await locCalcState.doTrilateration(distances)
            console.log(result)
    });

});
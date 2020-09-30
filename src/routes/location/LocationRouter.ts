import TrableRouter from "../TrableRouter";
import currentLocation from "./currentLocation";
import submitRSSI from "./submitRSSI";

export default class LocationRouter extends TrableRouter {
    constructor() {
        super("/location");
    }

    registerRoutes(): void {
        currentLocation(this.expressRouter)
        submitRSSI(this.expressRouter)
    }
}
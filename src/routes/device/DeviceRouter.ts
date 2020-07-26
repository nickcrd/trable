import TrableRouter from "../TrableRouter";
import enrollClient from "./enrollClient";

export default class DeviceRouter extends TrableRouter {
    constructor() {
        super("/devices");
    }

    registerRoutes(): void {
        enrollClient(this.expressRouter)
    }
}
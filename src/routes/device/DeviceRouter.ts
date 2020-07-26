import TrableRouter from "../TrableRouter";
import enrollClient from "./enrollClient";
import enrollNode from "./enrollNode";

export default class DeviceRouter extends TrableRouter {
    constructor() {
        super("/devices");
    }

    registerRoutes(): void {
        enrollClient(this.expressRouter)
        enrollNode(this.expressRouter)
    }
}
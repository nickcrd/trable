import TrableRouter from "../TrableRouter";
import enrollClient from "./enrollClient";
import enrollNode from "./enrollNode";
import heartbeat from "./heartbeat";

export default class DeviceRouter extends TrableRouter {
    constructor() {
        super("/devices");
    }

    registerRoutes(): void {
        enrollClient(this.expressRouter)
        enrollNode(this.expressRouter)
        heartbeat(this.expressRouter)
    }
}
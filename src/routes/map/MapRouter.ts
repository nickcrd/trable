import TrableRouter from "../TrableRouter";
import mapConfig from "./mapConfig";

export default class MapRouter extends TrableRouter {
    constructor() {
        super("/map");
    }

    registerRoutes(): void {
        mapConfig(this.expressRouter)
    }
}
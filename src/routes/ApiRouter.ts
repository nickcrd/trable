import TrableRouter from "./TrableRouter";

export default class ApiRouter extends TrableRouter {
    constructor(version: string, routers: TrableRouter[]) {
        super("/api/" + version);

        routers.forEach(router => {
            this.expressRouter.use(router.baseRoute, router.expressRouter)
        })
    }

    registerRoutes(): void {}
}
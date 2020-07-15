import { Router } from "express";

export default abstract class TrableRouter
{
    public baseRoute: string
    public expressRouter: Router

    constructor(baseRoute: string | undefined) {
        this.baseRoute = baseRoute ?? "/"
        this.expressRouter = Router()
        this.registerRoutes()
    }

    abstract registerRoutes(): void
}
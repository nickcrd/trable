import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import trableConfig from "./config/config";
import MongoConnection from "./config/database";
import logger from "./utils/logger";

import TrableRouter from "./routes/TrableRouter";
import DeviceRouter from "./routes/device/DeviceRouter";
import ApiRouter from "./routes/ApiRouter";

import genericErrorHandler from "./middlewares/genericErrorHandler";
import validationErrorHandler from "./middlewares/validationErrorHandler";

import events from "./event/events";
import eventEmitter from "./event/eventEmitter";

import * as Sentry from "@sentry/node";
import LocationRouter from "./routes/location/LocationRouter";

class TrableApp {
    public expressApp: express.Application;

    constructor() {
        this.expressApp = express();
        this.loadModules()
        this.registerMiddlewares()
    }

    private loadModules() {
        // Init Sentry Logger
        if (trableConfig.sentryUrl) {
            logger.info("Initializing Sentry")
            Sentry.init({ dsn: trableConfig.sentryUrl });
            this.expressApp.use(Sentry.Handlers.requestHandler())
        }
        new MongoConnection(trableConfig.mongoUrl)
    }

    private registerMiddlewares() {
        this.expressApp.use(morgan('dev', { stream: { write: msg => logger.debug(msg.trim()) }}));
        this.expressApp.use(express.json());
        this.expressApp.use(cookieParser());
    }

    public registerRouters(routers: TrableRouter[]) {
        routers.forEach((router) => {
            this.expressApp.use(router.baseRoute, router.expressRouter)
        });
        return this;
    }

    public start(port: number) {
        // Error handlers need to be registered last
        this.expressApp.use(Sentry.Handlers.errorHandler())
        this.expressApp.use(validationErrorHandler)
        this.expressApp.use(genericErrorHandler)

        this.expressApp.listen(port, () => {
            logger.info("Started Trable server on port " + port)
            eventEmitter.emit(events.trableAppStarted, this)
        });
        return this
    }
}

const app = new TrableApp()
    .registerRouters([ new ApiRouter("v1", [
            new DeviceRouter(),
            new LocationRouter()
        ])])
    .start(8080)

export default app
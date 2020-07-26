import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import MongoConnection from "./config/database";
import logger from "./utils/logger";

import TrableRouter from "./routes/TrableRouter";
import DeviceRouter from "./routes/device/DeviceRouter";

import validationErrorHandler from "./middlewares/validationErrorHandler";

import trableConfig from "./config/config";
import ApiRouter from "./routes/ApiRouter";

class TrableApp {
    public expressApp: express.Application;

    constructor() {
        this.expressApp = express();
        this.loadModules()
        this.registerMiddlewares()
    }

    private loadModules() {
        new MongoConnection(trableConfig.mongoUrl)
    }

    private registerMiddlewares() {
        this.expressApp.use(morgan('dev'));
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
        this.expressApp.use(validationErrorHandler) // placed it here since error handlers need to be registered last

        this.expressApp.listen(port, () => {
            logger.info("Started Trable server on port " + port)
        });
        return this
    }
}

const app = new TrableApp()
    .registerRouters([ new ApiRouter("v1", [
            new DeviceRouter()
        ])])
    .start(8080)

export default app
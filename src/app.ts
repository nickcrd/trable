import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import MongoConnection from "./config/database";
import logger from "./utils/logger";

import AuthController from "./controllers/AuthController";

import TrableApiUserModel, {TrableApiUser} from "./models/auth/TrableApiUserModel";
//import {TrableEntityType} from "./models/auth/TrableEntityType";

import TrableRouter from "./routes/TrableRouter";
import DeviceRouter from "./routes/device/DeviceRouter";

import validationErrorHandler from "./middlewares/validationErrorHandler";
import trableConfig from "./config/config";

class TrableApp {
    public expressApp: express.Application;

    constructor() {
        this.expressApp = express();

        new MongoConnection(trableConfig.mongoUrl)
        this.registerMiddlewares()
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

// Ugly hack during development
require('dotenv').config()
///

const app = new TrableApp()
    .registerRouters([ new DeviceRouter() ])
    .start(8080)

export default app
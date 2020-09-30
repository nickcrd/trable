import express from "express";
import socketio, {Socket} from "socket.io"
import cookieParser from "cookie-parser";
import morgan from "morgan";

import http from "http"

import MongoConnection from "./config/database";
import logger from "./utils/logger";

import TrableRouter from "./routes/TrableRouter";
import DeviceRouter from "./routes/device/DeviceRouter";
import ApiRouter from "./routes/ApiRouter";

import genericErrorHandler from "./middlewares/genericErrorHandler";
import validationErrorHandler from "./middlewares/validationErrorHandler";

import * as Sentry from "@sentry/node";
import LocationRouter from "./routes/location/LocationRouter";
import MapRouter from "./routes/map/MapRouter";
import {config} from "node-config-ts";
import getManifest from "./routes/getManifest";
import AuthController from "./controllers/AuthController";
import GenericResponse from "./models/GenericResponse";
import SocketManager from "./sockets/SocketManager";

class TrableApp {
    public expressApp: express.Application;

    constructor() {
        this.expressApp = express();
        this.loadModules()
        this.registerMiddlewares()
    }

    private loadModules() {
        // Init Sentry Logger
        if (config.sentryUrl) {
            logger.info("Initializing Sentry")
            Sentry.init({ dsn: config.sentryUrl });
            this.expressApp.use(Sentry.Handlers.requestHandler())
        }

       new MongoConnection(config.mongoUrl).connect()
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
        // Register manifest roue
        getManifest(this.expressApp)

        // Error handlers need to be registered last
        this.expressApp.use(Sentry.Handlers.errorHandler())
        this.expressApp.use(validationErrorHandler)
        this.expressApp.use(genericErrorHandler)


        this.expressApp.options('*', require('cors')())

        const httpServer = new http.Server(this.expressApp)
        SocketManager.setupSockets(httpServer)

        httpServer.listen(port, () => {
            logger.info("Started Trable server on port " + port)
        });
        return this
    }
}

const app = new TrableApp()
    .registerRouters([ new ApiRouter("v1", [
            new DeviceRouter(),
            new LocationRouter(),
            new MapRouter()
        ])])
    .start(8080)

export default app
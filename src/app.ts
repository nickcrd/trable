import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import MongoConnection from "./config/database";
import AuthController from "./controllers/AuthController";
import logger from "./utils/logger";
import TrableApiUserModel, {TrableApiUser} from "./models/auth/TrableApiUserModel";
//import {TrableEntityType} from "./models/auth/TrableEntityType";
import TrableRouter from "./routes/TrableRouter";

class TrableApp {
    public expressApp: express.Application;

    constructor() {
        this.expressApp = express();
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

    public start(port: number): TrableApp {
        this.expressApp.listen(port, () => {
            logger.info("Started Trable server on port " + port)
        });

        return this
    }
}

// Ugly hack during development
require('dotenv').config()

let mongoUrl = "";
if (process.env.MONGO_DB_URL)
    mongoUrl = process.env.MONGO_DB_URL

new MongoConnection(mongoUrl)
///


const app = new TrableApp()
    .registerRouters([ ])
    .start(8080)

// Some testing -- Make sure to remove stuff below

/*
BLENodeModel.create({
    location: { x: 1.5, y: 2, z: 9.42 }
}).then((data: BLENodeModel) => {
    console.log(data)
})

*/
/*
TrableApiUserModel.create({
    entityType: TrableEntityType.TOKEN,
    permissions: [ "sensor.submitRSSI", "admin.listAllLocations" ],
    tokenLastIssued: ( Date.now() / 1000 )
}).then((data: TrableApiUserModel) => {
    console.log(data)

    BLENodeModel.create({
        displayName: "Test Node 1 ",
        location: { x: 1, y: 2, z: 3},
        apiUser: data
    })
} )*/

TrableApiUserModel.findById("5eefb42719f2e4053b516b65").then((user: TrableApiUser | null) => {
    if (user){
        logger.info(AuthController.getJWTfor(user))
    }
}).catch(err => logger.error(err.toString()))

export default app
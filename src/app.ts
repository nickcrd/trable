import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import MongoConnection from "./config/database";
import TrableApiUserModel, {TrableApiUser} from "./models/auth/TrableApiUser";
import {TrableEntityType} from "./models/auth/TrableEntityType";
import BLENode from "./models/BLENode";
import Location from "./models/Location";
import AuthController from "./controllers/AuthController";

class TrableApp {
    public expressApp: express.Application;

    constructor() {
        this.expressApp = express();
        this.registerMiddlewares()
    }

    private registerMiddlewares() {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(express.json());
        this.expressApp.use(cookieParser());
    }

    public registerControllers(controllers: any[]) {
        controllers.forEach((controller) => {
            this.expressApp.use('/', controller.router)
        });
        return this;
    }

    public start(port: number) {
        this.expressApp.listen(port, () => {
            console.log("[trable] Started on port " + port);
        });
    }
}

// Ugly hack during development
require('dotenv').config()

let mongoUrl: string = "";
if (process.env.MONGO_URL)
    mongoUrl = process.env.MONGO_URL

new MongoConnection(mongoUrl)
///

let app = new TrableApp()
    .registerControllers([  ])
    .start(8080)

// Some testing -- Make sure to remove stuff below

/*
BLENode.create({
    location: { x: 1.5, y: 2, z: 9.42 }
}).then((data: BLENode) => {
    console.log(data)
})

*/
/*
TrableApiUserModel.create({
    entityType: TrableEntityType.TOKEN,
    permissions: [ "sensor.submitRSSI", "admin.listAllLocations" ],
    tokenLastIssued: ( Date.now() / 1000 )
}).then((data: TrableApiUser) => {
    console.log(data)

    BLENode.create({
        displayName: "Test Node 1 ",
        location: { x: 1, y: 2, z: 3},
        apiUser: data
    })
} )*/


TrableApiUserModel.findById("5eefb42719f2e4053b516b65").then((user: TrableApiUser | null) => {
    if (user) {
        console.log(AuthController.getJWTfor(user))
    }
}).catch(err => console.error(err.toString()))

export default app
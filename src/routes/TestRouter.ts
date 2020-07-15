import TrableRouter from "./TrableRouter";
import requireAuth from "../middlewares/auth/requireAuth";
import {TrableApiUser} from "../models/auth/TrableApiUserModel";

export default class TestRouter extends TrableRouter {
    constructor() {
        super("/");
    }

    registerRoutes(): void {
        this.expressRouter.get('/test', requireAuth, (req, res) => {
            const trableApiUser: TrableApiUser = req.user as TrableApiUser;
            res.json(trableApiUser)
        })
    }

}
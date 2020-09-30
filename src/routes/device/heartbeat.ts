import { Request, Response, Router } from "express";
import requireAuth from "../../middlewares/auth/requireAuth";

export default (router: Router) => {
    // TODO: Do something with the heartbeat, currently only used to verify if token is valid
    router.get('/heartbeat', [requireAuth], async (req: Request, res: Response) => {
        res.json({ status: 200 })
    })
}
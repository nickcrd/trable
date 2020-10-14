import { Request, Response, Router } from "express";
import requireAuth from "../../middlewares/auth/requireAuth";
import requirePermission from "../../middlewares/auth/requirePermission";
import permission from "../../utils/permission";
import {celebrate, Joi, Segments} from "celebrate";
import LocationController from "../../controllers/LocationController";
import {TrableApiUser} from "../../models/auth/TrableApiUserModel";

export default (router: Router) => {
    router.post('/submitRSSI', [
        requireAuth,
        requirePermission(permission.sensor.submitRSSI),
        celebrate({
            [Segments.BODY]: {
                targetId: Joi.string().required(),
                rssiMeasurements: Joi.array().required(),
                rssi1m: Joi.number().required(),
                pathLossParam: Joi.number().required(),
                timestamp: Joi.number()
            }
        })
    ], async (req: Request, res: Response) => {
        await LocationController.submitNewMeasurement(req.user as TrableApiUser, req.body.targetId, req.body.rssi1m, req.body.rssiMeasurements, req.body.pathLossParam, req.body.timestamp)
        // eventEmitter.emit(events.newRawRSSIMeasurement, req.body)
        res.json({ status: 200 })
    })
}
import { Request, Response, Router } from "express";
import requireAuth from "../../middlewares/auth/requireAuth";
import requirePermission from "../../middlewares/auth/requirePermission";
import permission from "../../utils/permission";
import {celebrate, Joi, Segments} from "celebrate";
import LocationController from "../../controllers/LocationController";

export default (router: Router) => {
    router.post('/submitRSSI', [
        requireAuth,
        requirePermission(permission.sensor.submitRSSI),
        celebrate({
            [Segments.BODY]: {
                targetId: Joi.string().required(),
                rssi: Joi.number().required(),
                txPower: Joi.number(),
                timestamp: Joi.number().required()
            }
        })
    ], async (req: Request, res: Response) => {
        await LocationController.submitNewMeasurement(req.body.targetId, req.body.txPower, req.body.rssi, req.body.timestamp)
        // eventEmitter.emit(events.newRawRSSIMeasurement, req.body)
        res.json({ status: 200 })
    })
}
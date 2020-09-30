import { Request, Response, Router } from "express";
import DeviceController from "../../controllers/DeviceController";
import GenericResponse from "../../models/GenericResponse";
import requireAuth from "../../middlewares/auth/requireAuth";
import requirePermission from "../../middlewares/auth/requirePermission";
import {celebrate, Joi, Segments} from "celebrate";
import permission from "../../utils/permission";
import logger from "../../utils/logger";

/* ... */
export default (router: Router) => {
    router.post('/enrollNode', [
        requireAuth,
        requirePermission(permission.admin.enrollNodes),
        celebrate({
            [Segments.BODY]: {
                displayName: Joi.string().required(),
                location: Joi.object({
                    x: Joi.number().required(),
                    y: Joi.number().required(),
                    z: Joi.number().required()
                }).required()
            }
        })
    ], async (req: Request, res: Response) => {
        try {
            const result = await DeviceController.createApiUserForNode(req.body.displayName, req.body.location)
            res.json(result)
        } catch (error) {
            res.status(500).json(new GenericResponse(500, error.toString()))
            logger.error("An error occurred during request: " + error)
        }
    })
}
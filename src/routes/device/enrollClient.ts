import { Request, Response, Router } from "express";
import DeviceController from "../../controllers/DeviceController";
import GenericResponse from "../../models/GenericResponse";

export default (router: Router) => {
    // TODO: Add ratelimit middleware
    router.get('/enrollClient', async (req: Request, res: Response) => {
        try {
            const result = await DeviceController.createApiUserForClient()
            await res.json(result)
        } catch (error) {
            res.status(500).json(new GenericResponse(500, error.toString()))
        }
    })
}
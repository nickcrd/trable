import { Request, Response, Router } from "express";
import GenericResponse from "../../models/GenericResponse";
import requireAuth from "../../middlewares/auth/requireAuth";

export default (router: Router) => {
    router.get('/current', [requireAuth], async (req: Request, res: Response) => {
       /* try {
            const result = await DeviceController.createApiUserForClient()
            res.json(result)
        } catch (error) {
            res.status(500).json(new GenericResponse(500, error.toString()))
        }
        */
    })
}
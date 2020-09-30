import { Request, Response, Router } from "express";
import MapController from "../../controllers/MapController";
import GenericResponse from "../../models/GenericResponse";

export default (router: Router) => {
    router.get('/mapConfig', async (req: Request, res: Response) => {
        try {
            const mapConfig = await MapController.getMapConfig()
            res.json(mapConfig)
        } catch(err) {
            res.status(500).json(new GenericResponse(500, err.toString()))
            throw err
        }
    })
}
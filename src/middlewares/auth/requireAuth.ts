import { Request, Response, NextFunction } from "express";
import getTokenFromHeader from "../../utils/getTokenFromHeader";
import AuthController from "../../controllers/AuthController";
import GenericResponse from "../../models/GenericResponse";

export default async function requireAuth(req: Request, res: Response, next: NextFunction) {
    const token = getTokenFromHeader(req)
    if (token == undefined) {
        res.status(401).json(new GenericResponse(401, "Unauthorized"))
        return;
    }

    AuthController.validateJWT(token).then(apiUser => {
        req.user = apiUser
        next()
    }).catch(err => {
        res.status(401).json(new GenericResponse(401, "Unauthorized"))
    })
}
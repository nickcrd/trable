import { Request, Response, NextFunction } from "express";
import GenericResponse from "../models/GenericResponse";

export default (error: any, req: Request, res: Response, next: NextFunction) => {
    if (error.joi) {
        return res.status(400).json(new GenericResponse(400, error.joi.message))
    }
    next(error)
}
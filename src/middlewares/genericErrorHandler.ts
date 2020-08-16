import { Request, Response, NextFunction } from "express";
import GenericResponse from "../models/GenericResponse";

export default (error: any, req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    if (res.sentry) {
        return res.status(500).json({ status: 500, message: error.message, sentryId: res.sentry })
    }
    return res.status(500).json(new GenericResponse(500, error.message))
}
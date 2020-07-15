import { Request, Response, NextFunction } from "express";

export default function requireAuth(req: Request, res: Response, next: NextFunction) {
    // TODO: method stub
    next()
}
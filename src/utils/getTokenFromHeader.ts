import {Request} from "express";

export default function getAuthTokenFromHeader(req: Request): string | undefined {
    const header = req.headers.authorization
    if (header && header.split(' ')[0] === 'Bearer') {
        return header.split(' ')[1];
    }
    return undefined
}

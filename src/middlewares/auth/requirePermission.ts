import { Request, Response, NextFunction } from "express";
import GenericResponse from "../../models/GenericResponse";
import { TrableApiUser } from "../../models/auth/TrableApiUserModel";
import logger from "../../utils/logger";

export default function requirePermission(permission: string | string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user) {
            res.status(401).json(new GenericResponse(401, "Unauthorized"))
            return;
        }

        // Convert single string to string[] so we can use one single line to check for perms
        if (typeof permission === 'string') {
            permission = [ permission ]
        }

        const trableUser = req.user as TrableApiUser
        if ('permissions' in trableUser)
        {
            const hasPerm = permission.every(perm => trableUser.permissions.includes(perm))
            if (hasPerm) {
                next()
            } else {
                res.status(403).json(new GenericResponse(401, "Missing permission (" + permission.toString() +") to perform action."))
            }
        } else {
            res.status(401).json(new GenericResponse(401, "Unauthorized"))
        }
    }
}
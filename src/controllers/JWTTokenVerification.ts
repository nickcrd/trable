import {VerifiedCallback} from "passport-jwt";
import TrableApiUser from "../models/auth/TrableApiUserModel";
import logger from "../utils/logger";

export default async function verify(jwtToken: any, done: VerifiedCallback) {
    try {
        const apiUser = await TrableApiUser.findById(jwtToken.id)
        if (apiUser == null) {
            done(null, false)
            return;
        }

        // Check if jwtToken is still valid

        if (Object.prototype.hasOwnProperty.call(jwtToken,"iat") && (typeof jwtToken.iat === 'number')) {
            const iat: number = jwtToken.iat
            if (apiUser.tokenLastIssued > iat) // Reject the token because a new one was issued
            {
                done(null, false)
                return
            }
        }

        done(null, apiUser)

    } catch (exception) {
        logger.error(exception.getError().toString(), { error: exception.getError() })
        done(exception.getError(), false)
    }
}
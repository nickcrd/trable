import {VerifiedCallback} from "passport-jwt";
import TrableApiUser from "../models/auth/TrableApiUser";

export default async function verify(jwtToken: any, done: VerifiedCallback) {
    try {
        const apiUser = await TrableApiUser.findById(jwtToken.id)
        if (apiUser == null) {
            done(null, false)
            return;
        }

        // Check if jwtToken is still valid
        if (jwtToken.hasOwnProperty("iat") && (typeof jwtToken.iat === 'number')) {
            const iat: number = jwtToken.iat
            if (apiUser.tokenLastIssued > iat) // Reject the token because a new one was issued
            {
                done(null, false)
                return
            }
        }

        done(null, apiUser)

    } catch (exception) {
        console.error(exception.getError().toString())
        done(exception.getError(), false)
    }
}
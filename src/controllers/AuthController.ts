import * as jwt from "jsonwebtoken";
import TrableApiUserModel, {TrableApiUser} from "../models/auth/TrableApiUserModel";
import {TrableEntityType} from "../models/auth/TrableEntityType";
import app from "../app";
import {config} from "node-config-ts";

export class AuthController {
    private JWT_SECRET: string;

    constructor(JWT_SECRET: string) {
        this.JWT_SECRET = JWT_SECRET
    }

    public async generateJWTfor(user: TrableApiUser): Promise<string> {
        return new Promise((resolve, reject) => {
            jwt.sign({ id: user._id, iat: user.tokenLastIssued }, this.JWT_SECRET, ( err: Error | null, encoded: string | undefined) => {
                if (encoded) {
                    resolve(encoded)
                }
                reject(err)
            })
        })
    }

    public async verifyAndDecodeJWT(token: string): Promise<object> {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this.JWT_SECRET, { algorithms: [ "HS256" ]}, (err, decoded) => {
                if (decoded) {
                    resolve(decoded)
                }
                reject(err)
            })
        })
    }

    public validateJWTFields(token: any): boolean {
        if (Object.prototype.hasOwnProperty.call(token, "id") &&
            Object.prototype.hasOwnProperty.call(token, "iat")) {
            return true;
        } else {
            throw new Error("Fields are missing in JWT")
        }
    }

    private validateIssueTime(token: any, apiUser: TrableApiUser): boolean {
        if (Object.prototype.hasOwnProperty.call(token,"iat") && (typeof token.iat === 'number')) {
            const iat: number = token.iat
            return apiUser.tokenLastIssued === iat
        }
        return false;
    }

    public async getUserFromJWT(token: any): Promise<TrableApiUser> {
        const apiUser = await TrableApiUserModel.findById(token.id)
        if (apiUser == null) {
            throw new Error("TrableAPIUser for id " + token.id + " is null")
        }

        const isValid = this.validateIssueTime(token, apiUser)
        if (!isValid) {
            throw new Error("The token was revoked or doesn't match with the issued timestamp stored")
        }

        return apiUser
    }

    public async validateJWT(token: string): Promise<TrableApiUser> {
        const decodedToken = await this.verifyAndDecodeJWT(token)
        this.validateJWTFields(decodedToken)
        return await this.getUserFromJWT(decodedToken)
    }
}

export default new AuthController(config.authSecret)
import passport from 'passport';
import passportJwt, {VerifiedCallback, VerifyCallback} from "passport-jwt";
import jwtVerify from './JWTTokenVerification'

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

import * as jwt from "jsonwebtoken";
import {TrableApiUser} from "../models/auth/TrableApiUserModel";

export class AuthController {
    private JWT_SECRET: string;

    constructor(JWT_SECRET: string) {
        this.JWT_SECRET = JWT_SECRET
        this.setup()
    }

    public setup() {
        passport.use(new JwtStrategy(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: this.JWT_SECRET
            }, jwtVerify));
    }

    public getJWTfor(user: TrableApiUser): string
    {
        if (user.tokenLastIssued)
        {
            return jwt.sign({ id: user._id, iat: user.tokenLastIssued }, this.JWT_SECRET, { encoding: ""})
        }
        else
        {
            return jwt.sign({ id: user._id }, this.JWT_SECRET)
        }
    }

}

// TODO: Make sure to grab a secret from config or env
export default new AuthController("AAAA")
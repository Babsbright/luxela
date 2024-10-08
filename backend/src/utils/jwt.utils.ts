// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import jwt, { JwtPayload } from "jsonwebtoken"
import { AppConfig } from "../config/app.config"

/**
 * @description for encryption of data for authentication purpose
 * @param payload object to be encrypted
 * @returns string of above 246 long charater 
*/
export const signToken = (payload: object): string | null => {
    return jwt.sign(payload, AppConfig.jwt.secret, {expiresIn: AppConfig.jwt.expiration})
}

/**@description logic to decrypt encrypted data*/
export const decodeToken = (token: string): JwtPayload | string | null => {
    return jwt.decode(token)
}

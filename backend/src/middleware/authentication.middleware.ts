// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Request, Response, NextFunction } from "express";
import CustomAPIError from "../errors/CustomAPIError";

export class AuthGuard{
    static async authenticateUser(req: Request, res: Response, next: NextFunction){
        const token = req.headers.authorization.split(' ')[1]
        if(!token) {
            return next(new CustomAPIError('You are not logged in!, Please sign in.'))
        }
        

    }
}
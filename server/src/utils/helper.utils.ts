import { Response } from "express";
import {v4 as uuidv4 } from 'uuid';

/**
 * @description to struction the response to be sent out to the client in a very readable format
 * @param payload object of the below key
 * @argument res: Response,
 * @argument StatusCodes: number,
 * @argument message: string,
 * @argument data: any
*/ 
export const responseHandler = (payload: {
    res: Response,
    StatusCodes: number,
    message: string,
    data: any
}) => {
    const {res, StatusCodes, message,data} = payload
    return res.status(StatusCodes).json({
        message,
        data
    })
}

/**
 * @description uuid logic for fetching a long unique string of character
 * @returns a string character as userId
*/ 
export const uuid = () => {    
    return uuidv4()
}
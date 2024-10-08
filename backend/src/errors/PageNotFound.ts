import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';


export const notFound = (req: Request, res: Response) => {
  res.status(StatusCodes.BAD_REQUEST).send("Route does not exist")
}
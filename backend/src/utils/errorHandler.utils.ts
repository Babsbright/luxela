// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { NextFunction, Request, Response } from "express";

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  let statusCode: any = undefined;
  if (!error.statusCode) {
    statusCode = res.statusCode === 200 ? 500 : error.statusCode
  } else {
    statusCode = error.statusCode
  }
  let errorMessage = error.message;
  if (Array.isArray(error.errors)) {
    if (error.errors) {
      const formattedErrors = error.errors.map((err: any) => `${err.message}`);
      errorMessage += `: ${formattedErrors.join(', ')}`;
    }
  }
  return res.status(statusCode).json({
    status: false,
    error: errorMessage
  })
}


export {
  errorHandler
}
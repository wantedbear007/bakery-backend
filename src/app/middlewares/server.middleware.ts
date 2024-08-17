import { NextFunction, Request, Response } from "express";
import { statusCodes } from "../utils/serverUtils";

export const supportedRequestType = (type: string)  => (req: Request, res: Response, next: NextFunction) => {
  const hasContentType = req.get("content-type") !== undefined && req.get("content-type") !== null;
  const isCorrectType = req.is(type) === null || req.is(type) === type;
  
  if (hasContentType && !isCorrectType) {
    if (process.env.NODE_ENV === "development") {
      console.error(`Body type should be of supported type ${type}`)
    }

    return next({
      code: statusCodes.unacceptable,
      success: false,
      message: `Requests with body type is not supported !`
    })
  }

  return next()
} 

export const requestsOfTypeJSON = () => supportedRequestType('application/json');


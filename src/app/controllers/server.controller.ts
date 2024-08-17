import { NextFunction, Request, Response } from "express";
import { apiName } from "../utils/utils";
import { statusCodes } from "../utils/serverUtils";

export function health(req: Request, res: Response) {
  res.status(statusCodes.success).json({
    message: "Servers are healthy",
    success: true,
  });
}

export function initialPage(req: Request, res: Response) {
  res.status(statusCodes.success).json({
    message: `Welcome to ${apiName}`,
    success: true,
  });
}

export function serverPort() {
  console.log(
    `server is listening on port: http://127.0.0.1:${process.env.PORT}`
  );
}

export function missingRoutes(req: Request, res: Response) {
  res.status(statusCodes.notFound).json({
    message: "Route not found",
    success: false,
  });
}

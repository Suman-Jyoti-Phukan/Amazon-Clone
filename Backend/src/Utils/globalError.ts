import { Request, Response, NextFunction } from "express";
export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || "failed";

  res.status(statusCode).json({
    status,
    message: err.message,
  });
};

import AppError from "./appError";
import { Request, Response, NextFunction } from "express";

export const catchAsync = (
  fn: (req: Request, res: Response, next: NextFunction) => any
) => {
  return (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next).catch((err: any) => {
      return next(new AppError(err.message, 404));
    });
};

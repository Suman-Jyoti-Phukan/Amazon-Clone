import User from "../Model/User";
import { catchAsync } from "../Utils/catchAsync";

import { NextFunction, Request, Response } from "express";

export const getAllUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.find();

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  }
);

export const getUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const user = await User.findById(id);

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  }
);

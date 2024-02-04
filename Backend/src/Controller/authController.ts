import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../Utils/catchAsync";
import User from "../Model/User";
import AppError from "../Utils/appError";
import { createTokenAndSendRes } from "../Utils/createTokenAndSendRes";
import verifyToken from "../Utils/verifyJWTTokken";

export const signup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    createTokenAndSendRes(user, 201, res);
  }
);

export const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { password, email } = req.body;

    if (!email || !password)
      return next(new AppError("Email or Password cannot be empty", 404));

    const user = await User.findOne({ email }).select("+password");

    console.log(user);

    if (!user || !(await user.comparePassword(password, user.password))) {
      return next(new AppError("Invalid Password Or Email", 401));
    }

    createTokenAndSendRes(user, 200, res);
  }
);

export const isAuthenticated = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"]?.split(" ")[1];

    console.log(token, process.env.JWT_SECRET_KEY);

    let decoded: null | { id: string; iat: number; exp: number } = null;

    if (token && process.env.JWT_SECRET_KEY) {
      decoded = await verifyToken(token, process.env.JWT_SECRET_KEY);
    }

    if (!decoded) {
      return res.status(404).json({
        status: "failed",
        message: "No user found",
      });
    }
    const sessionUser = await User.findById(decoded.id);

    res.status(200).json({
      status: "success",
      user: sessionUser,
      isAuthenticated: true,
    });
  }
);

export const updateCart = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("Route hit");

    console.log(req.body);

    const { productId } = req.body;

    if (!productId)
      throw new Error("Product Id not defined in the body. Please provide one");

    const token = req.headers["authorization"]?.split(" ")[1];

    let decoded: null | { id: string; iat: number; exp: number } = null;

    if (token && process.env.JWT_SECRET_KEY) {
      decoded = await verifyToken(token, process.env.JWT_SECRET_KEY);
    }

    if (!decoded) return next(new AppError("Invalid User Id", 400));

    const sessionUser = await User.findById(decoded.id);

    console.log(sessionUser);

    if (!sessionUser) throw new Error("Invalid User Id");

    sessionUser.userCart.push(productId);

    await sessionUser.save({
      validateBeforeSave: false,
    });

    res.status(200).json({
      status: "success",
      message: "Successfully Added",
    });
  }
);

export const deleteCart = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { productId } = req.body;

    const token = req.headers["authorization"]?.split(" ")[1];

    let decoded: null | { id: string; iat: number; exp: number } = null;

    if (token && process.env.JWT_SECRET_KEY) {
      decoded = await verifyToken(token, process.env.JWT_SECRET_KEY);
    }

    if (!decoded) return next(new AppError("Invalid User Id", 400));

    const sessionUser = await User.findById(decoded.id);

    if (!sessionUser) throw new Error("Invalid User Id");

    sessionUser.userCart.pull(productId);

    await sessionUser.save({
      validateBeforeSave: false,
    });

    res.status(201).json({
      status: "success",
      message: "Successfully Deleted",
    });
  }
);

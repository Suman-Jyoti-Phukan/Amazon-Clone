import express from "express";

import { Request, Response, NextFunction } from "express";

import { router as productRouter } from "./Routes/productRoutes";

import { router as userRouter } from "./Routes/userRoutes";

import { globalErrorHandler } from "./Utils/globalError";

import AppError from "./Utils/appError";

import cors from "cors";

const app = express();

app.use(
  cors({
    origin: true,
    methods: ["POST", "GET", "PATCH", "DELETE"],
  })
);

app.use(
  express.json({
    limit: "10kb",
  })
);

app.use("/", (req, res, next) => {
  console.log(req.originalUrl);
  next();
});

app.use("/api/products", productRouter);

app.use("/api/users", userRouter);

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`No Route Defined at ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

export default app;

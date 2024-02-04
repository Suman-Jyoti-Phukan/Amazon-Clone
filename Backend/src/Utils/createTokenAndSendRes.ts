import { Response } from "express";
import { createJWTToken } from "./createToken";

export function createTokenAndSendRes(
  user: any,
  statusCode: number,
  res: Response
) {
  const token = createJWTToken(user._id);

  user.password = undefined;

  res.header("Authorization", "Bearer " + token);

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
}

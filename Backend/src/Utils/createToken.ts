import jwt from "jsonwebtoken";
export const createJWTToken = (userId: any): string => {
  console.log(userId, "userId");
  return jwt.sign(
    {
      id: userId,
    },

    process.env.JWT_SECRET_KEY as any,

    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

import jwt from "jsonwebtoken";

const verifyToken = (token: string, secretKey: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
};

export default verifyToken;

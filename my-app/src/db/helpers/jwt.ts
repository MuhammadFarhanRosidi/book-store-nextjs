import jwt, { JwtPayload } from "jsonwebtoken";
import * as jose from "jose";

const SECRET = process.env.SECRET as string;

export const signToken = (payload: JwtPayload) => {
  return jwt.sign(payload, SECRET);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET);
};

export const verifyTokenJose = async <T>(token: string) => {
  const secretKey = new TextEncoder().encode(SECRET);
  const payloadJose = await jose.jwtVerify<T>(token, secretKey);
  return payloadJose.payload;
};

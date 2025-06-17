import jwt from "jsonwebtoken";

// Strong typing for payload
interface JWTPayload {
  id: number;
  username: string;
  // add other fields if needed
}

const SECRET = process.env.JWT_SECRET;
if (!SECRET) {
  throw new Error("JWT_SECRET is not defined in the environment variables");
}

// Create JWT with 1-day expiry
export const createJWT = (payload: JWTPayload): string => {
  return jwt.sign(payload, SECRET, { expiresIn: "1d" });
};

// Verify and decode JWT
export const verifyJWT = (token: string): JWTPayload => {
  try {
    return jwt.verify(token, SECRET) as JWTPayload;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};

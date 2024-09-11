import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET || "your_secret_key";
const tokenExpiry = "1h";

interface Payload {
  id: string;
}

export function signToken(payload: Payload): string {
  return jwt.sign(payload, secretKey, { expiresIn: tokenExpiry });
}

export function verifyToken(token: string): Payload | null {
  try {
    const decoded = jwt.verify(token, secretKey) as Payload;
    return decoded;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
}

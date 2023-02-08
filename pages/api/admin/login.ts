import { getJwtSecretKey } from "../../../lib/auth";
import type { NextApiRequest } from "next";
import { MongoClient } from "mongodb";
import { serialize } from "cookie";
import { SignJWT } from "jose";
import { nanoid } from "nanoid";

export default async function handler(req: NextApiRequest, res: any) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const client = await MongoClient.connect(
      process.env.NEXT_PUBLIC_MONGODB_URL as string
    );

    const db = client.db("cc");

    const users = db.collection("admin");

    const foundUser = await users.findOne({
      username: username,
    });
    const validatePass = await users.findOne({
      password: password,
    });
    if (!foundUser) {
      res.json({ message: "user not found" });
    } else if (!validatePass) {
      res.json({ message: "invalid password" });
    } else if (foundUser && validatePass) {
      const token = await new SignJWT({})
        .setProtectedHeader({ alg: "HS256" })
        .setJti(nanoid())
        .setIssuedAt()
        .setExpirationTime("24h")
        .sign(new TextEncoder().encode(getJwtSecretKey()));

      const serialised = serialize("AdminUserJwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        path: "/",
      });

      res.setHeader("Set-Cookie", serialised);
      res.status(200).json({ message: "success" });
    }
    client.close();
  } else {
    //Response for other than POST method
    res.status(500).json({ message: "Route not valid" });
  }
}

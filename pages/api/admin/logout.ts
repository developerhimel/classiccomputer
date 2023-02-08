import type { NextApiRequest } from "next";
import { serialize } from "cookie";

export default async function handler(req: NextApiRequest, res: any) {
  const { cookies } = req;

  const jwt = cookies.OursiteJWT;

  if (!jwt) {
    return res.json({ message: "you haven't logged in yet..." });
  } else {
    const serialised = serialize("AdminUserJwt", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json({ message: "Successfuly logged out!" });
  }
}

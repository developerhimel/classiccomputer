import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("AdminUserJwt")?.value;

  const verifiedToken =
    token &&
    (await verifyAuth(token).catch((error) => {
      console.log(error);
    }));

  if (request.url.includes("/Admin")) {
    if (request.url.includes("/Admin/dashboard")) {
      if (!verifiedToken) {
        return NextResponse.redirect(new URL("/Admin/login", request.url));
      }
    } else if (request.url.includes("/Admin/login")) {
      if (verifiedToken) {
        return NextResponse.redirect(new URL("/Admin/dashboard", request.url));
      }
    }
  }
}

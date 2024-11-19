import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/signin" || path === "/signup";
  const token = request.cookies.get("token")?.value;
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
  if (token && isPublicPath) {
    return NextResponse.next();
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};

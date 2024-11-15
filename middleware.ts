import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/signin";
  const token = request.cookies.get("token")?.value;

  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/signin", request.url));
  } else if (token) {
    try {
      if (isPublicPath) {
        return NextResponse.next();
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/"],
};

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.JWT_SECRET,
  });
  const isAuthPage = request.nextUrl.pathname.startsWith("/auth");
  if (isAuthPage) {
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (!token) {
    const redirectUrl = new URL("/auth", request.url);

    return NextResponse.redirect(redirectUrl);
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/", "/auth"],
};

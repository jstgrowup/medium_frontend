import api from "@/utils/api";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token") as string;
  try {
    await api.get(`/api/v1/user/verify-email?token=${token}`);
    cookies().set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
      maxAge: 60 * 60,
    });
    const frontendUrl =
      process.env.NEXT_PUBLIC_SERVER_ENV === "dev"
        ? process.env.NEXT_PUBLIC_DEV_FRONTEND_URL
        : process.env.NEXT_PUBLIC_PROD_FRONTEND_URL;
    return Response.redirect(`${frontendUrl}`);
  } catch (error) {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}

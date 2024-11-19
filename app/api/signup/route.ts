import api from "@/utils/api";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const { email, password, name } = await request.json();
  try {
    if (!email || !password || !name) {
      return NextResponse.json(
        { message: "Please Provide Credentials!" },
        { status: 400 }
      );
    }
    const payload = { email, password, name };
    const apiResponse = await api.post(`/api/v1/user/signup`, payload);
    const token = apiResponse.data.token;

    cookies().set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
      maxAge: 60 * 60,
    });
    return Response.json({
      message: "Signup Successfull!",
    });
  } catch (error) {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}

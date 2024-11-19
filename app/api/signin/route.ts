import api from "@/utils/api";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const { email, password } = await request.json();
  try {
    if (!email || !password) {
      return NextResponse.json(
        { message: "Please Provide Credentials!" },
        { status: 400 }
      );
    }
    const payload = { email, password };
    const apiResponse = await api.post(`/api/v1/user/signin`, payload);
    const token = apiResponse.data.token;
    cookies().set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
      maxAge: 60 * 60,
    });
    return Response.json({
      message: "Login Successful!",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
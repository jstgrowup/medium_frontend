"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export async function callApi({
  endpoint,
  method = "GET",
  body = null,
}: {
  endpoint: string;
  method: string;
  body?: any;
}) {
  const token = cookies().get("token")?.value;
  if (!token) {
    redirect("/signin");
  }
  const api = axios.create({
    baseURL:
      process.env.NEXT_PUBLIC_SERVER_ENV === "dev"
        ? process.env.NEXT_PUBLIC_DEV_BACKEND_URL
        : process.env.NEXT_PUBLIC_PROD_BACKEND_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(body instanceof FormData
        ? {}
        : { "Content-Type": "application/json" }),
    },
  });
  try {
    const response = await api.request({
      url: endpoint,
      method,
      data: body,
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
}

"use server";
// app/actions/apiClient.js
import axios from "axios";
import { cookies } from "next/headers";

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
    throw new Error("Authentication token not found");
  }
  const api = axios.create({
    baseURL:
      process.env.NEXT_PUBLIC_SERVER_ENV === "dev"
        ? process.env.NEXT_PUBLIC_DEV_BACKEND_URL
        : process.env.NEXT_PUBLIC_PROD_BACKEND_URL,
    headers: {
      Authorization: `Bearer ${token}`,
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

import axios from "axios";
import { getSession } from "next-auth/react";
const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_SERVER_ENV === "dev"
      ? process.env.NEXT_PUBLIC_DEV_BACKEND_URL
      : process.env.NEXT_PUBLIC_PROD_BACKEND_URL,
  withCredentials: true,
});
api.interceptors.request.use(
  async (config) => {
    const session: any = await getSession();
    console.log("session:here", session);
    const token = session?.user?.accessToken;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;

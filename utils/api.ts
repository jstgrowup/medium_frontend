import axios from "axios";
import Cookies from "js-cookie";
const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_SERVER_ENV === "dev"
      ? process.env.NEXT_PUBLIC_DEV_BACKEND_URL
      : process.env.NEXT_PUBLIC_PROD_BACKEND_URL,
  withCredentials: true,
});
api.interceptors.request.use((config) => {
  // Get the token cookie

  const token = Cookies.get("token");
  console.log("token:here", token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;

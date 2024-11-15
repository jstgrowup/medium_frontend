import axios from "axios";
const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_SERVER_ENV === "dev"
      ? process.env.NEXT_PUBLIC_DEV_BACKEND_URL
      : process.env.NEXT_PUBLIC_PROD_BACKEND_URL,
  withCredentials: true,
});

export default api;

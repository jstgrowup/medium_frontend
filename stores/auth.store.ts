import { create } from "zustand";
import {
  AuthStoreType,
  SigninPayloadType,
  SignupPayloadType,
} from "../utils/types.ts/user.types";
import { showErrorToast, showSuccessToast } from "@/components/common/toast";

import axios from "axios";
import { callApi } from "@/actions/apiClient";

export const useAuthStore = create<AuthStoreType>((set) => ({
  loading: false,
  isAuthenticated: false,
  error: null,
  data: null,
  signUpAction: async (payload: SignupPayloadType) => {
    set({ loading: true, error: null, data: null });
    try {
      const response = await axios.post(`/api/signup`, payload);
      showSuccessToast(response.data.message);
      set({ loading: false, data: response.data, isAuthenticated: true });
    } catch (error: any) {
      set({ error: error.message, loading: false, isAuthenticated: false });
    }
  },
  signInAction: async (payload: SigninPayloadType) => {
    set({ loading: true, error: null, data: null });
    try {
      const response = await axios.post(`/api/signin`, payload);
      showSuccessToast(response.data.message);
      set({ loading: false, data: response.data, isAuthenticated: true });
    } catch (error: any) {
      showErrorToast(error.response.data.error);
      set({ error: error.message, loading: false, isAuthenticated: false });
    }
  },
  logoutAction: async () => {
    set({ loading: true, error: null, data: null });
    try {
      const response = await axios.post("/api/logout", {});
      showSuccessToast(response.data.message);
      set({ loading: false, data: response.data, isAuthenticated: true });
      return response;
    } catch (error: any) {
      showErrorToast(error.response.data.error);
      set({ error: error.message, loading: false, isAuthenticated: false });
    }
  },
  checkSessionToken: async () => {
    set({ loading: true, error: null, data: null });
    try {
      const response = await callApi({
        endpoint: `${
          process.env.NEXT_PUBLIC_SERVER_ENV === "dev"
            ? process.env.NEXT_PUBLIC_DEV_BACKEND_URL
            : process.env.NEXT_PUBLIC_PROD_BACKEND_URL
        }/api/v1/user/me`,
        method: "GET",
      });
      set({ loading: false, data: response.data });
      return response;
    } catch (error: any) {
      showErrorToast(error.response.data.error);
      set({ error: error.message, loading: false });
    }
  },
}));

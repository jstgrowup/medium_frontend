import { create } from "zustand";
import {
  AuthStoreType,
  SigninPayloadType,
  SignupPayloadType,
} from "../utils/types.ts/user.types";
import { showErrorToast, showSuccessToast } from "@/components/common/toast";
import api from "@/utils/api";
export const useAuthStore = create<AuthStoreType>((set) => ({
  loading: false,
  isAuthenticated: false,
  error: null,
  data: null,
  signUpAction: async (payload: SignupPayloadType) => {
    set({ loading: true, error: null, data: null });
    try {
      const response = await api.post(`/api/v1/user/signup`, payload);

      set({ loading: false, data: response.data, isAuthenticated: true });
    } catch (error: any) {
      set({ error: error.message, loading: false, isAuthenticated: false });
    }
  },
  signInAction: async (payload: SigninPayloadType) => {
    set({ loading: true, error: null, data: null });
    try {
      const response = await api.post(`/api/v1/user/signin`, payload, {
        withCredentials: true,
      });
      showSuccessToast(response.data.message);
      set({ loading: false, data: response.data, isAuthenticated: true });
    } catch (error: any) {
      showErrorToast(error.response.data.error);
      set({ error: error.message, loading: false, isAuthenticated: false });
    }
  },
  checkSessionToken: async (payload: SigninPayloadType) => {
    set({ loading: true, error: null, data: null });
    try {
      const response = await api.post(`/api/v1/user/signin`, payload);
      showSuccessToast(response.data.message);
      set({ loading: false, data: response.data });
    } catch (error: any) {
      showErrorToast(error.response.data.error);
      set({ error: error.message, loading: false });
    }
  },
}));

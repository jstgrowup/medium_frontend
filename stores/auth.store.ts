import { create } from "zustand";
import {
  SigninPayloadType,
  SignupPayloadType,
  TokenStoreType,
} from "../utils/types.ts/user.types";
import axios from "axios";
import { showErrorToast, showSuccessToast } from "@/components/common/toast";
export const useAuthStore = create<TokenStoreType>((set) => ({
  token: "",
  loading: false,
  error: null,
  data: null,
  signUpAction: async (payload: SignupPayloadType) => {
    set({ loading: true, error: null, data: null });
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_DEV_BACKEND_URL}/api/v1/user/signup`,
        payload
      );

      set({ token: response.data.token, loading: false, data: response.data });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
  signInAction: async (payload: SigninPayloadType) => {
    set({ loading: true, error: null, data: null });
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_DEV_BACKEND_URL}/api/v1/user/signin`,
        payload
      );
      showSuccessToast(response.data.message);
      set({ token: response.data.token, loading: false, data: response.data });
    } catch (error: any) {
      showErrorToast(error.response.data.error);
      set({ error: error.message, loading: false });
    }
  },
}));

import { create } from "zustand";
import {
  AuthStoreType,
  SigninPayloadType,
  SignupPayloadType,
  UpdateProfileType,
} from "../utils/types.ts/user.types";
import { showErrorToast, showSuccessToast } from "@/components/common/toast";

import axios from "axios";
import { callApi } from "@/actions/apiClient";
import { uploadBlogImageResponseBody } from "@/utils/types.ts/blogs.types";

export const useAuthStore = create<AuthStoreType>((set, get) => ({
  loading: false,
  isAuthenticated: false,
  error: null,
  data: null,
  profileLoading: false,
  userProfile: null,
  signUpAction: async (payload: SignupPayloadType) => {
    set({ loading: true, error: null, data: null });
    try {
      const response = await axios.post(
        `${
          process.env.NEXT_PUBLIC_SERVER_ENV === "dev"
            ? process.env.NEXT_PUBLIC_DEV_BACKEND_URL
            : process.env.NEXT_PUBLIC_PROD_BACKEND_URL
        }/api/v1/user/signup`,
        payload
      );
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
  getUserProfile: async (id: string) => {
    set({
      loading: true,
      error: null,
      userProfile: null,
    });
    try {
      const response = await callApi({
        endpoint: `${
          process.env.NEXT_PUBLIC_SERVER_ENV === "dev"
            ? process.env.NEXT_PUBLIC_DEV_BACKEND_URL
            : process.env.NEXT_PUBLIC_PROD_BACKEND_URL
        }/api/v1/user/profile/${id}`,
        method: "GET",
      });
      set({ loading: false, userProfile: response.data });
      return response;
    } catch (error: any) {
      showErrorToast(error.response.data.error);
      set({ error: error.message, loading: false });
    }
  },
  updateProfilePictureAction: async (formData: any) => {
    try {
      const uplaodedImage: uploadBlogImageResponseBody = await axios.post(
        "/api/s3-upload",
        formData
      );
      showSuccessToast(uplaodedImage.data.message);
      return uplaodedImage;
    } catch (error: any) {
      showErrorToast(error.response.data.error);
      set({ error: error.message });
    }
  },
  updateProfileAction: async (body: UpdateProfileType) => {
    set({ profileLoading: true });
    try {
      const response = await callApi({
        endpoint: `${
          process.env.NEXT_PUBLIC_SERVER_ENV === "dev"
            ? process.env.NEXT_PUBLIC_DEV_BACKEND_URL
            : process.env.NEXT_PUBLIC_PROD_BACKEND_URL
        }/api/v1/user/update/profile`,
        method: "POST",
        body: body,
      });
      showSuccessToast(response.message);
      const { checkSessionToken } = get();
      await checkSessionToken();
      set({ profileLoading: false });
      return response.message;
    } catch (error: any) {
      showErrorToast(error.response.data.error);
      set({ error: error.message });
    }
  },
}));

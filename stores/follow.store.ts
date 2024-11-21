import { create } from "zustand";
import { showErrorToast, showSuccessToast } from "@/components/common/toast";
import { callApi } from "@/actions/apiClient";
import { FollowStoreType } from "@/utils/types.ts/follow.types";
export const useFollowStore = create<FollowStoreType>((set, get) => ({
  loading: false,
  error: null,
  followRecommendations: [],
  btnLoading: false,
  followRecommendationsAction: async () => {
    set({ loading: true, error: null });
    try {
      const response = await callApi({
        endpoint: `${
          process.env.NEXT_PUBLIC_SERVER_ENV === "dev"
            ? process.env.NEXT_PUBLIC_DEV_BACKEND_URL
            : process.env.NEXT_PUBLIC_PROD_BACKEND_URL
        }/api/v1/follow/recommendations`,
        method: "GET",
      });
      set({ loading: false, followRecommendations: response?.data });
      return response;
    } catch (error: any) {
      showErrorToast(error.response?.data?.error || "An error occurred");
      set({ error: error.message, loading: false });
      return undefined;
    }
  },
  followUserAction: async (followingId: string) => {
    set({ btnLoading: true, error: null });
    try {
      const response = await callApi({
        endpoint: `${
          process.env.NEXT_PUBLIC_SERVER_ENV === "dev"
            ? process.env.NEXT_PUBLIC_DEV_BACKEND_URL
            : process.env.NEXT_PUBLIC_PROD_BACKEND_URL
        }/api/v1/follow/follow`,
        method: "POST",
        body: {
          followingId,
        },
      });
      showSuccessToast(response.message);
      const { followRecommendationsAction } = get();
      await followRecommendationsAction();
      set({ btnLoading: false });
      return response;
    } catch (error: any) {
      showErrorToast(error.response?.data?.error || "An error occurred");
      set({ error: error.message, loading: false });
      return undefined;
    }
  },
}));

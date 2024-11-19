import { create } from "zustand";
import { showErrorToast } from "@/components/common/toast";
import { callApi } from "@/actions/apiClient";
import {
  FollowersRecommendationsResponseBody,
  FollowStoreType,
} from "@/utils/types.ts/follow.types";
const followRecommendationsAction =
  async (): Promise<FollowersRecommendationsResponseBody> => {
    return callApi({
      endpoint: `${
        process.env.NEXT_PUBLIC_SERVER_ENV === "dev"
          ? process.env.NEXT_PUBLIC_DEV_BACKEND_URL
          : process.env.NEXT_PUBLIC_PROD_BACKEND_URL
      }/api/v1/follow/recommendations`,
      method: "GET",
    });
  };
export const useFollowStore = create<FollowStoreType>((set) => ({
  loading: false,
  error: null,
  followRecommendations: [],
  followRecommendationsAction: async () => {
    set({ loading: true, error: null });
    try {
      const response = await followRecommendationsAction();
      set({ loading: false, followRecommendations: response?.data });
      return response;
    } catch (error: any) {
      showErrorToast(error.response?.data?.error || "An error occurred");
      set({ error: error.message, loading: false });
      return undefined;
    }
  },
}));

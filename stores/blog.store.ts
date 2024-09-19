import { create } from "zustand";
import axios from "axios";

import { BlogStoreType } from "@/utils/types.ts/blogs.types";
const fetchBulkBlogs = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_DEV_BACKEND_URL}/api/v1/blog/get/bulk`
  );
  return response.data;
};
export const useBlogStore = create<BlogStoreType>((set) => ({
  loading: false,
  blogs: [],
  error: null,
  data: null,
  bulkBlogsAction: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchBulkBlogs();
      set({ blogs: data, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));

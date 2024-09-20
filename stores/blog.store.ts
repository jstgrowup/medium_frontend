import { create } from "zustand";

import {
  BlogPayloadType,
  BlogStoreType,
  BlogType,
  BulkBlogResponseType,
  CreatedBlogResponseBody,
} from "@/utils/types.ts/blogs.types";
import api from "@/utils/api";
import { showErrorToast, showSuccessToast } from "@/components/common/toast";
const fetchBulkBlogs = async (): Promise<BulkBlogResponseType> => {
  const response = await api.get(
    `${process.env.NEXT_PUBLIC_DEV_BACKEND_URL}/api/v1/blog/get/bulk`,
    { withCredentials: true }
  );
  return response.data;
};
const createBlog = (
  blogPayload: BlogType
): Promise<CreatedBlogResponseBody> => {
  return api.post(
    `${process.env.NEXT_PUBLIC_DEV_BACKEND_URL}/api/v1/blog/create`,
    blogPayload,
    { withCredentials: true }
  );
};
const getSingleBlog = (blogId: string): Promise<CreatedBlogResponseBody> => {
  return api.get(
    `${process.env.NEXT_PUBLIC_DEV_BACKEND_URL}/api/v1/blog/${blogId}`,
    { withCredentials: true }
  );
};
export const useBlogStore = create<BlogStoreType>((set) => ({
  loading: false,
  blogs: [],
  error: null,
  data: null,
  bulkBlogsAction: async () => {
    set({ loading: true, error: null });
    try {
      const allBlogs = await fetchBulkBlogs();
      set({ blogs: allBlogs.data, loading: false });
      return allBlogs;
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
  createBlogAction: async (blogPayload: BlogPayloadType) => {
    set({ loading: true, error: null });
    try {
      const newBlog = await createBlog(blogPayload);
      showSuccessToast(newBlog.data.message);
      set({ loading: false });
      return newBlog;
    } catch (error: any) {
      showErrorToast(error.response.data.error);
      set({ error: error.message, loading: false });
    }
  },
  individualBlogAction: async (blogId: string) => {
    set({ loading: true, error: null });
    try {
      const blog = await getSingleBlog(blogId);
      set({ loading: false });
      return blog;
    } catch (error: any) {
      console.log("error:", error);
      showErrorToast(error.response.data.error);
      set({ error: error.message, loading: false });
    }
  },
}));

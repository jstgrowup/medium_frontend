import { create } from "zustand";
import {
  BlogPayloadType,
  BlogStoreType,
  BlogType,
  BulkBlogResponseType,
  CreatedBlogResponseBody,
  SingleBlogPropType,
} from "@/utils/types.ts/blogs.types";
import api from "@/utils/api";
import { showErrorToast, showSuccessToast } from "@/components/common/toast";

const fetchBulkBlogs = async (): Promise<BulkBlogResponseType> => {
  const response = await api.get(`/api/v1/blog/get/bulk`);
  return response.data;
};
const createBlog = (
  blogPayload: BlogType
): Promise<CreatedBlogResponseBody> => {
  return api.post(`/api/v1/blog/create`, blogPayload, {
    withCredentials: true,
  });
};
const getSingleBlog = async (blogId: string): Promise<SingleBlogPropType> => {
  return await api.get(`/api/v1/blog/${blogId}`, { withCredentials: true });
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
  individualBlogAction: async (
    blogId: string
  ): Promise<BlogType | undefined> => {
    set({ loading: true, error: null });
    try {
      const response = await getSingleBlog(blogId);
      set({ loading: false });
      return response.data;
    } catch (error: any) {
      showErrorToast(error.response?.data?.error || "An error occurred");
      set({ error: error.message, loading: false });
      return undefined;
    }
  },
}));

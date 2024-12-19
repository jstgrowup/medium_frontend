import { create } from "zustand";
import {
  BlogPayloadType,
  BlogStoreType,
  BlogType,
  BulkBlogResponseType,
  CreatedBlogResponseBody,
  SingleBlogPropType,
  uploadBlogImageResponseBody,
} from "@/utils/types.ts/blogs.types";
import { showErrorToast, showSuccessToast } from "@/components/common/toast";
import { callApi } from "@/actions/apiClient";
import axios from "axios";
const fetchBulkBlogs = async (): Promise<BulkBlogResponseType> => {
  return callApi({
    endpoint: `${
      process.env.NEXT_PUBLIC_SERVER_ENV === "dev"
        ? process.env.NEXT_PUBLIC_DEV_BACKEND_URL
        : process.env.NEXT_PUBLIC_PROD_BACKEND_URL
    }/api/v1/blog/get/bulk`,
    method: "GET",
  });
};
const createBlog = (
  blogPayload: BlogType
): Promise<CreatedBlogResponseBody> => {
  return callApi({
    endpoint: `${
      process.env.NEXT_PUBLIC_SERVER_ENV === "dev"
        ? process.env.NEXT_PUBLIC_DEV_BACKEND_URL
        : process.env.NEXT_PUBLIC_PROD_BACKEND_URL
    }/api/v1/blog/create`,
    method: "POST",
    body: blogPayload,
  });
};
const getSingleBlog = async (blogId: string): Promise<BlogType> => {
  return callApi({
    endpoint: `${
      process.env.NEXT_PUBLIC_SERVER_ENV === "dev"
        ? process.env.NEXT_PUBLIC_DEV_BACKEND_URL
        : process.env.NEXT_PUBLIC_PROD_BACKEND_URL
    }/api/v1/blog/${blogId}`,
    method: "GET",
  });
};

export const useBlogStore = create<BlogStoreType>((set) => ({
  loading: false,
  blogs: [],
  error: null,
  data: null,
  followRecommendations: [],
  imageUrl: "",
  blogLoading: false,
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
      showSuccessToast(newBlog?.message);
      set({ loading: false });
      return newBlog;
    } catch (error: any) {
      showErrorToast(error?.response?.data?.error);
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
      return response;
    } catch (error: any) {
      showErrorToast(error.response?.data?.error || "An error occurred");
      set({ error: error.message, loading: false });
      return undefined;
    }
  },
  uploadBlogImageAction: async (formData: any) => {
    set({ blogLoading: true, error: null });
    try {
      const uplaodedImage: uploadBlogImageResponseBody = await axios.post(
        "/api/s3-upload",
        formData
      );
      showSuccessToast(uplaodedImage.data.message);
      set({ imageUrl: uplaodedImage?.data?.url, blogLoading: false });
      return uplaodedImage;
    } catch (error: any) {
      showErrorToast(error.response.data.error);
      set({ error: error.message });
    }
  },
}));

import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";
import Cookies from "js-cookie";
import { BlogBodyInterface } from "../utils/Types-interfaces";
export const blogAtomState = atom<BlogBodyInterface>({
  key: "blogState",
  default: {
    id: "",
    title: "",
    content: "",
    published: false,
    loading: false,
    error: null,
    success: false,
  },
});
export const blogsAtomState = atom({
  key: "blogsAtom",
  default: selector({
    key: "blogsAtomSelector",
    get: async () => {
      const token = Cookies.get("token");
      const response = await axios.get(
        `${import.meta.env.VITE_DEV_BACKEND_URL}/api/v1/blog/get/bulk`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return response.data.data;
    },
  }),
});
export const blogAtomFamily = atomFamily({
  key: "blogAtomFamilyForSelector",
  default: selectorFamily({
    key: "blogSelectorFamily",
    get: (id?: string) => async () => {
      const token = Cookies.get("token");
      const response = await axios.get(
        `${import.meta.env.VITE_DEV_BACKEND_URL}/api/v1/blog/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return response.data.data;
    },
  }),
});

export const createBlogAPI = (blog: BlogBodyInterface, token: string) => {
  return axios.post(
    `${import.meta.env.VITE_DEV_BACKEND_URL}/api/v1/blog/create`,
    blog,
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

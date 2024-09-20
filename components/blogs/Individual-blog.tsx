"use client";
import { useBlogStore } from "@/stores/blog.store";
import { useParams, useSearchParams } from "next/navigation";
import SingleBlog from "./Single-blog";

export const IndividualBlog = () => {
  const paramsHook = useParams();
  const params = paramsHook;
  const blogId = params.blogId as string;
  const individualBlog = useBlogStore.getState().individualBlogAction(blogId);
  console.log("individualBlog:", individualBlog);
  return (
    <>
      <SingleBlog {...individualBlog} />
    </>
  );
};

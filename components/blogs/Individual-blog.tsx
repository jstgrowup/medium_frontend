"use client";
import { useBlogStore } from "@/stores/blog.store";
import { useParams } from "next/navigation";
import SingleBlog from "./Single-blog";
import { useEffect, useState } from "react";
import { BlogType } from "@/utils/types.ts/blogs.types";

export const IndividualBlog = () => {
  const [individualBlog, setIndividualBlog] = useState<BlogType | null>(null);
  const paramsHook = useParams();
  const params = paramsHook;
  const blogId = params.blogId as string;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogData = await useBlogStore
          .getState()
          .individualBlogAction(blogId);
        setIndividualBlog(blogData);
      } catch (err: any) {
        console.error(err);
      }
    };

    fetchBlog();
  }, [blogId]);

  return (
    <>
      <SingleBlog {...individualBlog} />
    </>
  );
};

"use client";
import { useBlogStore } from "@/stores/blog.store";
import { BlogType } from "@/utils/types.ts/blogs.types";
import React, { useEffect } from "react";
import BlogCard from "../Blog-card";

const Blogs = () => {
  const bulkBlogs = useBlogStore((state) => state.bulkBlogsAction);
  const blogs = useBlogStore((state) => state.blogs);
  useEffect(() => {
    bulkBlogs();
  }, [bulkBlogs]);
  return (
    <div>
      {blogs?.map((blog: BlogType) => {
        return (
          <BlogCard
            key={blog.id}
            title={blog.title}
            authorName={blog?.author?.name}
            createdAt={blog?.createdAt}
            content={blog.content}
            id={blog.id}
          />
        );
      })}
    </div>
  );
};

export default Blogs;

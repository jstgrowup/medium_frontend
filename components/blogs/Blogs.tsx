"use client";
import { useBlogStore } from "@/stores/blog.store";
import { BlogType } from "@/utils/types.ts/blogs.types";
import React, { useEffect } from "react";
import BlogCard from "./Blog-card";
import BlogLoader from "./Blogs-loader";

const Blogs = () => {
  const { bulkBlogsAction, blogs, loading } = useBlogStore((state) => state);
  useEffect(() => {
    bulkBlogsAction();
  }, []);

  if (loading) {
    return (
      <div>
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
      </div>
    );
  }
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

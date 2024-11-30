"use client";
import { useBlogStore } from "@/stores/blog.store";
import { BlogType } from "@/utils/types.ts/blogs.types";
import React, { useEffect } from "react";
import BlogCard from "./Blog-card";
import BlogLoader from "./Blogs-loader";
import { useFollowStore } from "@/stores/follow.store";
const Blogs = () => {
  const { bulkBlogsAction, blogs, loading } = useBlogStore((state) => state);
  const { followRecommendationsAction } = useFollowStore((state) => state);
  useEffect(() => {
    bulkBlogsAction();
    followRecommendationsAction();
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
    <div className="w-full">
      {blogs?.map((blog: BlogType) => {
        return (
          <BlogCard
            key={blog.id}
            title={blog.title}
            authorName={blog?.author?.name}
            createdAt={blog?.createdAt}
            content={blog.content}
            id={blog.id}
            imageUrl={blog.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default Blogs;

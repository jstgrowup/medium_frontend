"use client";
import { useBlogStore } from "@/stores/blog.store";
import React from "react";
import BlogLoader from "../blogs/Blogs-loader";

const ProfileRecentPosts = () => {
  const { blogs, loading } = useBlogStore((state) => state);
  if (loading) {
    return (
      <div>
        <BlogLoader />
        <BlogLoader />
      </div>
    );
  }
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-800">Recent Posts</h3>
      <div className="mt-4">
        {blogs?.map((blog) => {
          return (
            <div
              key={blog.id}
              className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4"
            >
              <h4 className="font-bold text-gray-800">{blog.title}</h4>
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: blog.content ?? "" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileRecentPosts;

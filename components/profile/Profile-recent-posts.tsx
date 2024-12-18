"use client";
import { useBlogStore } from "@/stores/blog.store";
import React from "react";
import BlogLoader from "../blogs/Blogs-loader";
import Image from "next/image";

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
              key={blog?.id}
              className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4 flex justify-between"
            >
              <div>
                <h4 className="font-bold text-gray-800">{blog?.title}</h4>
                <p
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: blog?.content ?? "" }}
                />
              </div>
              <div className="flex items-center justify-center lg:w-20 lg:h-20 sm:h-5 sm:w-5 md:h-14 md:w-14  rounded-md overflow-hidden">
                <Image
                  src={blog?.imageUrl ?? ""}
                  width={100}
                  height={100}
                  alt="No image"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileRecentPosts;

import React from "react";
import { Avatar } from "./Avatar";
import Link from "next/link";
import { BlogType } from "@/utils/types.ts/blogs.types";
import { useBlogStore } from "@/stores/blog.store";

const BlogCard: React.FC<BlogType> = ({
  title,
  authorName,
  content,
  createdAt,
  id,
}) => {
  const isLoading = useBlogStore((state) => state.loading);
  return (
    <Link href={`/blog/${id}`}>
      {isLoading ? (
        <div className="animate-pulse flex flex-col gap-4 transition-transform hover:shadow-lg rounded-lg cursor-pointerw-screen max-w-screen-md pb-6 px-4 pt-4">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            <div className="flex flex-col">
              <div className="h-4 w-1/2 bg-gray-200 rounded-md"></div>
              <div className="h-3 w-1/3 bg-gray-200 rounded-md"></div>
            </div>
          </div>
          <div className="h-6 w-3/4 bg-gray-200 rounded-md"></div>
          <div className="h-4 w-full bg-gray-200 rounded-md"></div>
        </div>
      ) : (
        <div className="border-b border-slate-400 w-screen max-w-screen-md pb-6 px-4 pt-4 transition-transform hover:shadow-lg rounded-lg cursor-pointer mx-auto">
          <div className="flex items-center gap-4">
            <Avatar size={"small"} name="subham" />

            <div className="flex flex-col">
              <div className="font-medium text-gray-800">{authorName}</div>
              <div className="font-light text-sm text-slate-500">
                {createdAt}
              </div>
            </div>
          </div>

          <div className="font-semibold text-2xl text-gray-900 pt-4">
            {title}
          </div>

          <div
            className="font-light text-md text-gray-700 pt-2 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: content ?? "" }}
          />
        </div>
      )}
    </Link>
  );
};

export default BlogCard;

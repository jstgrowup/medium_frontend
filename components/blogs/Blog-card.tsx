import React from "react";
import Avatar from "../common/Avatar";
import Link from "next/link";
import { BlogType } from "@/utils/types.ts/blogs.types";

const BlogCard: React.FC<BlogType> = ({
  title,
  authorName,
  content,
  createdAt,
  id,
}) => {
  return (
    <Link href={`/blog/${id}`}>
      <div className="border-b border-slate-400  pb-6 px-4 pt-4 transition-transform hover:shadow-lg shadow-md rounded-lg cursor-pointer mx-auto">
        <div className="flex items-center gap-4">
          <Avatar size={"small"} name="subham" />

          <div className="flex flex-col">
            <div className="font-medium text-gray-800">{authorName}</div>
            <div className="font-light text-sm text-slate-500">{createdAt}</div>
          </div>
        </div>

        <div className="font-semibold text-2xl text-gray-900 pt-4">{title}</div>

        <div
          className="font-light text-md text-gray-700 pt-2 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: content ?? "" }}
        />
      </div>
    </Link>
  );
};

export default BlogCard;

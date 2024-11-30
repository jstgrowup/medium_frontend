import React from "react";
import Avatar from "../common/Avatar";
import Link from "next/link";
import { BlogType } from "@/utils/types.ts/blogs.types";
import Image from "next/image";

const BlogCard: React.FC<BlogType> = ({
  title,
  authorName,
  content,
  createdAt,
  id,
  imageUrl,
}) => {
  return (
    <Link href={`/blog/${id}`}>
      <div className="border-b-2 border-slate-400 sm:w-full flex justify-between pb-6 px-4 pt-4 transition-transform hover:shadow-lg shadow-md rounded-lg cursor-pointer mx-auto">
        <div>
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
        <div className="flex items-center justify-center lg:w-32 lg:h-32 sm:h-2 sm:w-2 md:h-20 md:w-20  rounded-md overflow-hidden">
          <Image
            src={imageUrl ?? ""}
            width={100}
            height={100}
            alt="No image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

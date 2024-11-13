import { BlogType } from "@/utils/types.ts/blogs.types";
import React from "react";
import { Avatar } from "../common/Avatar";
import { useBlogStore } from "@/stores/blog.store";
import { SingleBlogLoader } from "./Single-blogs-loader";
const SingleBlog: React.FC<BlogType> = ({
  title,
  createdAt,
  content,
  author,
}) => {
  const isLoading = useBlogStore((state) => state.loading);
  return (
    <div className="grid grid-cols-12 px-4 md:px-16 w-full pt-5 gap-8">
      {isLoading ? (
        <SingleBlogLoader type="blog" />
      ) : (
        <div className="col-span-12 md:col-span-8 flex flex-col gap-6 bg-white shadow-md rounded-lg p-6">
          <div className="text-4xl md:text-5xl font-extrabold text-gray-800">
            {title}
          </div>

          <div className="text-slate-500 font-medium">
            Posted on{" "}
            <span className="text-gray-600 font-semibold">{createdAt}</span>
          </div>

          <div
            className="font-light text-md leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: content ?? "" }}
          />
        </div>
      )}
      {isLoading ? (
        <SingleBlogLoader type="author" />
      ) : (
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <div className="text-lg font-semibold text-gray-800">Author</div>

            <div className="flex items-center gap-4 mt-4">
              <Avatar size={"big"} name={author?.name ?? "Author"} />
              <div className="">
                <div className="text-xl font-semibold text-gray-800">
                  {author?.name ?? "Unknown Author"}
                </div>
                <div className="text-slate-500 font-medium">
                  Master of mirth, purveyor of puns, and a fountain of fun.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBlog;

import { BlogType } from "@/utils/types.ts/blogs.types";
import React from "react";
import { useBlogStore } from "@/stores/blog.store";
import { SingleBlogLoader } from "./Single-blogs-loader";
import Image from "next/image";
import { Loader2 } from "lucide-react";
const SingleBlog: React.FC<BlogType> = ({
  title,
  createdAt,
  content,
  author,
  imageUrl,
}) => {
  const isLoading = useBlogStore((state) => state.loading);
  return (
    <div className="grid grid-cols-12 px-4 md:px-16 w-full pt-5 gap-8">
      {isLoading ? (
        <SingleBlogLoader type="blog" />
      ) : (
        <div className="flex col-span-12 md:col-span-8 justify-between  gap-6 bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-col gap-2">
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

          <div className="flex items-center justify-center lg:w-32 lg:h-32 sm:h-2 sm:w-2 md:h-20 md:w-20  rounded-md overflow-hidden">
            {isLoading ? (
              <div className="w-full h-full flex items-center justify-center rounded-full border-4 border-white shadow-lg bg-gray-200">
                <Loader2 className="w-8 h-8 animate-spin text-gray-500" />
              </div>
            ) : imageUrl ? (
              <Image
                src={imageUrl ?? ""}
                width={100}
                height={100}
                alt="No image"
                className="object-cover w-full h-full"
              />
            ) : (
              <Image
                src="/no-profile.jpg"
                alt="No Profile Picture"
                className="w-full h-full rounded-full border-4 border-white shadow-lg object-cover"
                width={100}
                height={100}
              />
            )}
          </div>
        </div>
      )}
      {isLoading ? (
        <SingleBlogLoader type="author" />
      ) : (
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <div className="text-lg font-semibold text-gray-800">Author</div>

            <div className="flex items-center gap-4 mt-4">
              <div className="w-[80px] h-[70px]">
                <Image
                  src={author?.profilePic || "/no-profile.jpg"}
                  alt="Profile Picture"
                  className="rounded-full object-cover w-full h-full"
                  width={100}
                  height={100}
                />
              </div>
              <div className="">
                <div className="text-xl font-semibold text-gray-800">
                  {author?.name ?? "Unknown Author"}
                </div>
                <div className="text-slate-500 font-medium">{author?.role}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBlog;

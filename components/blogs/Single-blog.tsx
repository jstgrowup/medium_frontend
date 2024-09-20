import { BlogType } from "@/utils/types.ts/blogs.types";
import React from "react";
import { Avatar } from "../Avatar";

const SingleBlog: React.FC<BlogType> = ({
  title,
  createdAt,
  content,
  author,
}) => {
  console.log("content:", content);
  return (
    <div className="grid grid-cols-12 px-16 w-full pt-5">
      <div className="  col-span-8 flex flex-col gap-4">
        <div className="text-5xl font-extrabold">{title}</div>
        <div className="text-slate-400 font-semibold">
          Posted on {createdAt}
        </div>
        <div
          className="font-thin text-md"
          dangerouslySetInnerHTML={{ __html: content ?? "" }}
        />
      </div>
      <div className="  col-span-4">
        <div className="font-semibold text-lg">Author</div>
        <div className="flex  items-center">
          <div>
            {" "}
            <Avatar size={"big"} name="subham" />
          </div>
          <div className="pl-4">
            <div className="text-xl font-semibold "> {author?.name}</div>
            <div className="text-slate-500 font-semibold">
              Master of mirth purveyor of puns, and the funie{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

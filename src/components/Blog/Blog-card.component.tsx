import React from "react";
import { Avatar } from "./Avatar.component";
import type { BlogType } from "../../utils/Types-interfaces";
import { Link } from "react-router-dom";

const BlogCard: React.FC<BlogType> = ({
  title,
  authorName,
  content,
  createdAt,
  id,
}) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-slate-400 w-screen max-w-screen-md pb-4 pt-3">
        <div className="flex gap-3">
          <div className="flex justify-between items-center">
            <Avatar size={"small"} name="subham" />
          </div>
          <div className="font-extralight">{authorName}</div>
          <div className="font-light text-slate-500">.{createdAt}</div>
        </div>
        <div className="font-semibold text-2xl pt-2">{title}</div>
        <div
          className="font-thin text-md"
          dangerouslySetInnerHTML={{ __html: content ?? "" }}
        />
      </div>
    </Link>
  );
};

export default BlogCard;

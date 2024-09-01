import React from "react";

const BlogHeader = ({ header }: { header: string }) => {
  return (
    <div className="block mb-2 text-xl font-semibold text-black">{header}</div>
  );
};

export default BlogHeader;

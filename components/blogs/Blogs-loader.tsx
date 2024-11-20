import React from "react";

const BlogLoader = () => {
  return (
    <div>
      <div className="animate-pulse flex flex-col gap-4 transition-transform hover:shadow-lg rounded-lg cursor-pointerw-screen border-b border-slate-400  pb-6 px-4 pt-4 cursor-pointer mx-auto">
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
    </div>
  );
};

export default BlogLoader;

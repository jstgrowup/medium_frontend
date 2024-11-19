import React from "react";

const BlogFollowerSidebarLoader = () => {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md border border-gray-300 animate-pulse">
      <div className="flex items-center space-x-3">
        <div className="h-10 w-12 rounded-full bg-gray-300"></div>
        <div>
          <div className="h-4 w-24 bg-gray-300 rounded mb-1"></div>
        </div>
      </div>
      <div className="h-8 w-20 bg-gray-300 rounded"></div>
    </div>
  );
};

export default BlogFollowerSidebarLoader;

import React from "react";

const ProfileInfoLoader = () => {
  return (
    <div className="px-6 py-4 border-t flex gap-6">
      <div className="text-center">
        <div className="h-4 w-12 bg-gray-200 rounded animate-pulse  mx-auto"></div>
        <div className="h-6 w-16 bg-gray-300 rounded animate-pulse mt-2 mx-auto"></div>
      </div>

      <div className="text-center">
        <div className="h-4 w-12 bg-gray-200 rounded animate-pulse mx-auto"></div>
        <div className="h-6 w-16 bg-gray-300 rounded animate-pulse mt-2 mx-auto"></div>
      </div>

      <div className="text-center">
        <div className="h-4 w-12 bg-gray-200 rounded animate-pulse mx-auto"></div>
        <div className="h-6 w-16 bg-gray-300 rounded animate-pulse mt-2 mx-auto"></div>
      </div>
    </div>
  );
};

export default ProfileInfoLoader;

interface SkeletonLoaderProps {
  type: "blog" | "author";
}

export const SingleBlogLoader: React.FC<SkeletonLoaderProps> = ({ type }) => {
  return (
    <div
      className={`animate-pulse flex flex-col gap-2 ${
        type === "blog"
          ? "col-span-12 md:col-span-8"
          : "col-span-12 md:col-span-4"
      }`}
    >
      {type === "blog" ? (
        <>
          <div className="h-10 w-3/4 bg-gray-200 rounded-md mb-4"></div>
          <div className="h-4 w-1/3 bg-gray-200 rounded-md mb-2"></div>
          <div className="h-4 w-full bg-gray-200 rounded-md mb-2"></div>
          <div className="h-4 w-full bg-gray-200 rounded-md mb-2"></div>
          <div className="h-4 w-full bg-gray-200 rounded-md mb-2"></div>
        </>
      ) : (
        <>
          <div className="h-12 w-12 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-6 w-2/3 bg-gray-200 rounded-md mb-2"></div>
          <div className="h-4 w-1/2 bg-gray-200 rounded-md"></div>
        </>
      )}
    </div>
  );
};

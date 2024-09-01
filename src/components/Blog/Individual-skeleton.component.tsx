const IndividualSkeleton = () => {
  return (
    <div role="status" className="animate-pulse flex flex-col gap-4 min-w-96">
      <div className="flex gap-3">
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        <div className="flex flex-col gap-2">
          <div className="h-4 bg-gray-200 rounded-full w-32"></div>
          <div className="h-3 bg-gray-200 rounded-full w-24"></div>
        </div>
      </div>

      <div className="h-6 bg-gray-200 rounded-full w-3/4"></div>

      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded-full w-full"></div>
        <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded-full w-4/5"></div>
        <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default IndividualSkeleton;

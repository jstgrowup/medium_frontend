import IndividualSkeleton from "./Individual-skeleton.component";
import Navbar from "./Navbar.component";

const BlogSkeleton = () => {
  return (
    <>
      <Navbar />
      <div className="pb-4 pt-3 flex flex-col items-center">
        <div className="w-screen max-w-screen-md">
          <IndividualSkeleton />
          <IndividualSkeleton />
          <IndividualSkeleton />
          <IndividualSkeleton />
        </div>
      </div>
    </>
  );
};

export default BlogSkeleton;

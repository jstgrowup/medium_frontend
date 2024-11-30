import WhoToFollow from "@/components/blogs/Blog-followers-sidebar";
import Blogs from "@/components/blogs/Blogs";
import Navbar from "@/components/common/Navbar";
export default async function Home() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-4 gap-6 p-10 ">
        <div className="col-span-4 lg:col-span-3">
          <Blogs />
        </div>

        <div className="hidden md:block col-span-1">
          <WhoToFollow />
        </div>
      </div>
    </>
  );
}

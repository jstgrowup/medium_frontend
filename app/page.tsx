import WhoToFollow from "@/components/blogs/Blog-followers-sidebar";
import Blogs from "@/components/blogs/Blogs";
import Navbar from "@/components/common/Navbar";
export default async function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div>
          <Blogs />
        </div>
        <div>
          <WhoToFollow />
        </div>
      </div>
    </>
  );
}

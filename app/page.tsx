import Blogs from "@/components/blogs/Blogs";
import Navbar from "@/components/Navbar";

export default async function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div>
          <Blogs />
        </div>
      </div>
    </>
  );
}

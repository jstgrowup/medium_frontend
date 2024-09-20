import CreateBlog from "@/components/blogs/Create-blog";
import { IndividualBlog } from "@/components/blogs/Individual-blog";

import Navbar from "@/components/Navbar";

export default function IndividualBlogPage() {
  return (
    <>
      <Navbar />
      <IndividualBlog />
    </>
  );
}

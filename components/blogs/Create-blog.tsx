"use client";
import BlogHeader from "@/components/blogs/Blog-header";
import BlogTitleInput from "@/components/blogs/Blog-title";
import { useBlogStore } from "@/stores/blog.store";
import { BlogBodyInterface } from "@/utils/types.ts/blogs.types";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

export default function CreateBlog() {
  const editorref = useRef(null);
  const [blog, setblog] = useState<BlogBodyInterface>({
    title: "",
    content: "",
    published: false,
  });
  const createBlog = useBlogStore((state) => state.createBlogAction);
  const blogLoading = useBlogStore((state) => state.loading);
  const handleBlogCreation = async () => {
    try {
      const response: any = createBlog(blog);
      console.log("response:", response);
    } catch (error) {}
  };
  return (
    <>
      <div className=" flex justify-center min-h-fit items-center pt-3">
        <div className="h-96 flex flex-col items-left gap-5 ">
          <BlogTitleInput
            label="Title"
            placeholder="Please enter a title for your blog"
            onChange={(e) => setblog({ ...blog, title: e.target.value })}
          />
          <BlogHeader header={"Content"} />

          <JoditEditor
            ref={editorref}
            value={blog.content ?? ""}
            onChange={(newcontent) => setblog({ ...blog, content: newcontent })}
          />

          <button
            onClick={handleBlogCreation}
            className="w-48 bg-green-700 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            {blogLoading ? "Publishing..." : "Publish"}
          </button>
        </div>
      </div>
    </>
  );
}

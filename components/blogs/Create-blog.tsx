"use client";
import dynamic from "next/dynamic";
import BlogHeader from "@/components/blogs/Blog-header";
import BlogTitleInput from "@/components/blogs/Blog-title";
import { useBlogStore } from "@/stores/blog.store";
import { BlogBodyInterface } from "@/utils/types.ts/blogs.types";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import { useRef, useState } from "react";

import BlogFileUpload from "./Blog-file-upload";
export default function CreateBlog() {
  const editorref = useRef(null);
  const [blog, setblog] = useState<BlogBodyInterface>({
    title: "",
    content: "",
    published: false,
    imageUrl: "",
  });
  const createBlog = useBlogStore((state) => state.createBlogAction);
  const blogLoading = useBlogStore((state) => state.loading);
  const { uploadBlogImageAction } = useBlogStore((state) => state);
  const handleImageUpload = (imageUrl: string) => {
    setblog((prev) => ({ ...prev, imageUrl }));
  };
  return (
    <div className=" flex justify-center min-h-screen items-center  gap-3 flex-col sm:px-20 md:px-10 lg:px-20  ">
      <div className="w-full shadow-md rounded-lg border p-3">
        <BlogHeader header={"Please enter a title for your blog"} />
        <BlogTitleInput
          placeholder="Please enter a title for your blog"
          onChange={(e) => setblog({ ...blog, title: e.target.value })}
        />
      </div>
      <div className="w-full border shadow-md rounded-lg p-3">
        <BlogHeader header={"Please upload picture"} />
        <BlogFileUpload
          onUpload={handleImageUpload}
          existingImageUrl={blog?.imageUrl}
          uploadBlogImageAction={uploadBlogImageAction}
        />
      </div>
      <div className="w-full border shadow-md rounded-lg p-3">
        <BlogHeader header={"Content"} />
        <JoditEditor
          ref={editorref}
          value={blog.content ?? ""}
          onChange={(newcontent) => setblog({ ...blog, content: newcontent })}
        />
      </div>
      <button
        onClick={() => createBlog(blog)}
        className="w-48 bg-green-700 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      >
        {blogLoading ? "Publishing..." : "Publish"}
      </button>
    </div>
  );
}

"use client";
import dynamic from "next/dynamic";
import BlogHeader from "@/components/blogs/Blog-header";
import BlogTitleInput from "@/components/blogs/Blog-title";
import { useBlogStore } from "@/stores/blog.store";
import { BlogBodyInterface } from "@/utils/types.ts/blogs.types";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
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
  const { uploadBlogImageAction, imageUrl } = useBlogStore((state) => state);
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await uploadBlogImageAction(formData);
      setblog({ ...blog, imageUrl: response?.data.uploadedUrl });
    } catch (error) {
      console.error("File upload failed:", error);
    }
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
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <BlogHeader header={"Please upload picture"} />
            <Input id="picture" type="file" onChange={handleFileChange} />

            {imageUrl && <Image src={imageUrl} alt="image" />}
          </div>
          <button
            onClick={() => createBlog(blog)}
            className="w-48 bg-green-700 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            {blogLoading ? "Publishing..." : "Publish"}
          </button>
        </div>
      </div>
    </>
  );
}

import { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import Navbar from "../components/Blog/Navbar.component";
import BlogTitleInput from "../components/Blog-title.component";
import BlogHeader from "../components/Blog-header.component";
import {
  BlogBodyInterface,
  CreatedBlogResponseBody,
} from "../utils/Types-interfaces";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { blogAtomState, createBlogAPI } from "../recoil/blog.atom";
import Cookies from "js-cookie";

import { useNavigate } from "react-router-dom";
const CreateBlog = () => {
  const editorref = useRef(null);

  const [blog, setblog] = useState<BlogBodyInterface>({
    title: "",
    content: "",
    published: false,
  });
  const navigate = useNavigate();
  const currentBlogAtomState = useRecoilValue(blogAtomState);
  const setBlogState = useSetRecoilState(blogAtomState);
  const handleBlogCreation = async () => {
    const token = Cookies.get("token") ?? "";
    setBlogState((prevState) => ({
      ...prevState,
      loading: true,
    }));
    try {
      const response: CreatedBlogResponseBody = await createBlogAPI(
        blog,
        token
      );
      setBlogState((prevState) => ({
        ...prevState,
        title: response.data.title,
        content: response.data.content,
        published: response.data.published,
        id: response.data.id,
        loading: false,
        success: true,
      }));
      navigate(`/blog/${response.data.id}`);
    } catch (error) {
      setBlogState((prevState) => ({
        ...prevState,
        loading: false,
        success: true,
      }));
    }
  };
  return (
    <>
      <Navbar />
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
            {currentBlogAtomState.loading ? "Publishing..." : "Publish"}
          </button>
          {currentBlogAtomState.error && (
            <p>Error: {currentBlogAtomState.error}</p>
          )}
          {currentBlogAtomState.success && <p>Blog created successfully!</p>}
        </div>
      </div>
    </>
  );
};

export default CreateBlog;

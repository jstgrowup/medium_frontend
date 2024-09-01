import { useRecoilValue } from "recoil";
import BlogCard from "../components/Blog/Blog-card.component";
import Navbar from "../components/Blog/Navbar.component";
import { blogsAtomState } from "../recoil/blog.atom";

import type { BlogType } from "../utils/Types-interfaces";

const Blogs = () => {
  const recoilBlogs = useRecoilValue(blogsAtomState);
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div>
          {recoilBlogs.map((blog: BlogType) => {
            return (
              <BlogCard
                key={blog.id}
                title={blog.title}
                authorName={blog?.author?.name}
                createdAt={blog?.createdAt}
                content={blog.content}
                id={blog.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blogs;

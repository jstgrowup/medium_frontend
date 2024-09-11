import BlogCard from "@/components/Blog-card";
import Navbar from "@/components/Navbar";
import { BlogType } from "@/utils/types.ts/blogs.types";

export default async function Home() {
  const recoilBlogs: BlogType[] = [];
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div>
          {recoilBlogs?.map((blog: BlogType) => {
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
}

import { useRecoilValue } from "recoil";
import { blogAtomFamily, blogAtomState } from "../recoil/blog.atom";
import { useParams } from "react-router-dom";
import Blog from "../components/Blog/Blog.component";
import type { BlogType } from "../utils/Types-interfaces";

const IndividualBlog = () => {
  const { id } = useParams();
  let blog: BlogType | undefined;
  const existingBlog = useRecoilValue(blogAtomState);
  if (existingBlog.id !== id) {
    blog = useRecoilValue(blogAtomFamily(id));
  } else {
    blog = existingBlog;
  }

  return (
    <div>
      <Blog {...blog} />
    </div>
  );
};

export default IndividualBlog;

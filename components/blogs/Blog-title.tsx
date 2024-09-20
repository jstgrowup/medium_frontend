import { LabelledInterface } from "@/utils/types.ts/blogs.types";
import BlogHeader from "./Blog-header";

const BlogTitleInput = ({
  label,
  placeholder,
  onChange,
}: LabelledInterface) => {
  return (
    <div className="w-full">
      <BlogHeader header={label} />
      <input
        type={"text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default BlogTitleInput;

import { LabelledInterface } from "@/utils/types.ts/blogs.types";

const BlogTitleInput = ({ placeholder, onChange }: LabelledInterface) => {
  return (
    <div className="w-full  p-4">
      <input
        type={"text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default BlogTitleInput;

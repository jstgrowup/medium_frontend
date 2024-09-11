import Link from "next/link";
import { Avatar } from "./Avatar";

const Navbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4 items-center">
      <Link href={"/"}>
        <div className="font-semibold text-lg flex items-center cursor-pointer">
          Medium
        </div>
      </Link>
      <div className="flex gap-4">
        <div>
          <Link href={"/create-blog"}>
            <div className="w-32 bg-green-700 text-white font-semibold flex justify-center items-center px-4 py-2 rounded-full hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Create Blog
            </div>
          </Link>
        </div>
        <div>
          <Avatar size={"big"} name="subham" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

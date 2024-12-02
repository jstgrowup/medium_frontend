"use client";
import Link from "next/link";

import Dropdown from "./Dropdown";
import { useAuthStore } from "@/stores/auth.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export const Navbar = () => {
  const router = useRouter();
  const logoutAction = useAuthStore((state) => state.logoutAction);
  const setUser = useAuthStore((state) => state.checkSessionToken);
  const userData = useAuthStore((state) => state.data);
  useEffect(() => {
    setUser();
  }, []);
  const handleLogout = async () => {
    await logoutAction();
    router.refresh();
  };
  const profileRedirect = async () => {
    router.push("/profile");
  };
  return (
    <div className="border-b flex justify-between px-10 py-4 items-center">
      <Link href={"/"}>
        <div className="font-semibold text-lg flex items-center cursor-pointer">
          Medium
        </div>
      </Link>
      <div className="flex gap-4">
        <>
          <Link href={"/blog/create"}>
            <div className="w-32 bg-green-700 text-white font-semibold flex justify-center items-center px-4 py-2 rounded-full hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Create Blog
            </div>
          </Link>
        </>
        <Dropdown
          logoutAction={handleLogout}
          profileRedirect={profileRedirect}
          userName={userData?.name?.[0] || ""}
        />
      </div>
    </div>
  );
};

export default Navbar;

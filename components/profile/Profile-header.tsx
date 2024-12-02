"use client";
import React from "react";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CommonModal } from "../common/Modal";
import { useAuthStore } from "@/stores/auth.store";
const ProfileHeader: React.FC<{ jobRole: string; name: string }> = ({
  jobRole,
  name,
}) => {
  const userData = useAuthStore((state) => state.data);
  return (
    <div className="pt-20 px-6 ">
      <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
      <p className="text-gray-600">{jobRole}</p>
      <div className="mt-4 flex gap-4  justify-between">
        <div className="gap-3 flex">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-400">
            Follow
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-full shadow-md hover:bg-gray-200">
            Message
          </button>
        </div>
        <CommonModal
          triggerContent={
            <button className="flex items-center gap-2 px-4 py-1 border border-gray-400 text-gray-600 rounded-full hover:text-gray-800 hover:border-gray-500 hover:bg-gray-50 transition duration-200">
              <Edit className="w-6 h-4" />
              Edit
            </button>
          }
          title="Edit Profile"
          description="Make changes to your profile here. Click save when you're done."
          footer={<Button type="submit">Save changes</Button>}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </CommonModal>
      </div>
    </div>
  );
};

export default ProfileHeader;

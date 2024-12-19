"use client";
import React, { useState } from "react";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CommonModal } from "../common/Modal";
import { useAuthStore } from "@/stores/auth.store";
const ProfileHeader = () => {
  const userData = useAuthStore((state) => state.data);
  const updateProfileAction = useAuthStore(
    (state) => state.updateProfileAction
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const profileLoading = useAuthStore((state) => state.profileLoading);
  const [formData, setFormData] = useState({
    name: userData?.name || "",
    role: userData?.role || "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleSaveChanges = () => {
    updateProfileAction(formData);
    setIsModalOpen(false);
  };
  return (
    <div className="pt-20 px-6 ">
      <h1 className="text-2xl font-bold text-gray-800">{userData?.name}</h1>
      <p className="text-gray-600">{userData?.role}</p>
      <div className="mt-4 flex gap-4  justify-between">
        <div></div>
        <CommonModal
          triggerContent={
            <button className="flex items-center gap-2 px-4 py-1 border border-gray-400 text-gray-600 rounded-full hover:text-gray-800 hover:border-gray-500 hover:bg-gray-50 transition duration-200">
              <Edit className="w-6 h-4" />
              Edit
            </button>
          }
          title="Edit Profile"
          description="Make changes to your profile here. Click save when you're done."
          loading={profileLoading}
          handleSaveChanges={handleSaveChanges}
          btnText="Update"
          onClose={() => setIsModalOpen(!isModalOpen)}
          isOpen={isModalOpen}
        >
          <div className="grid grid-cols-4 items-center gap-4 ">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username">Role</Label>
            <Input
              id="role"
              value={formData.role}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
        </CommonModal>
      </div>
    </div>
  );
};

export default ProfileHeader;

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Loader2, Plus } from "lucide-react";
import { useAuthStore } from "@/stores/auth.store";
const ProfileNavbar = () => {
  const { updateProfilePictureAction, updateProfileAction } = useAuthStore(
    (state) => state
  );
  const userData = useAuthStore((state) => state.data);
  const [localImageUrl, setLocalImageUrl] = useState<string>("");
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await updateProfilePictureAction(formData);
      const imageUrl = response?.data.url;
      setLocalImageUrl(imageUrl ?? "");
      if (imageUrl) {
        updateProfileAction(imageUrl ?? "");
      }
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-500 h-40">
      <div className="absolute -bottom-16 left-6">
        <div className="relative  w-[100px] h-[100px]">
          {userData?.profilePic ? (
            <Image
              src={userData.profilePic}
              alt="Profile Picture"
              className="rounded-full border-4 border-white shadow-lg"
              width={100}
              height={100}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center rounded-full border-4 border-white shadow-lg bg-gray-200">
              <Loader2 className="w-8 h-8 animate-spin text-gray-500" />
            </div>
          )}
          <label className="absolute -bottom-1 -right-2 bg-blue-500 rounded-full p-2 shadow-md  cursor-pointer">
            <input
              type="file"
              className="hidden"
              src={localImageUrl}
              onChange={handleFileChange}
              alt="Uploaded Image"
            />
            <Plus className="w-4 h-4 text-white" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProfileNavbar;

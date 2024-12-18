"use client";
import Image from "next/image";
import React from "react";
import { Loader2, Plus } from "lucide-react";

interface ProfileNavbarProps {
  loading: boolean;
  profilePic?: string;
  defaultProfilePicUrl?: string;
}
const IndividualProfileNavbar: React.FC<ProfileNavbarProps> = ({
  loading,
  profilePic,
  defaultProfilePicUrl = "/no-profile.jpg",
}) => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-500 h-40">
      <div className="absolute -bottom-16 left-6">
        <div className="relative w-[100px] h-[100px]">
          {loading ? (
            <div className="w-full h-full flex items-center justify-center rounded-full border-4 border-white shadow-lg bg-gray-200">
              <Loader2 className="w-8 h-8 animate-spin text-gray-500" />
            </div>
          ) : profilePic ? (
            <Image
              src={profilePic}
              alt="Profile Picture"
              className="rounded-full object-cover w-full h-full"
              width={100}
              height={100}
            />
          ) : (
            <Image
              src={defaultProfilePicUrl}
              alt="No Profile Picture"
              className="w-full h-full rounded-full border-4 border-white shadow-lg object-cover"
              width={100}
              height={100}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default IndividualProfileNavbar;

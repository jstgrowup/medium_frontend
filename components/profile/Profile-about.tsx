"use client";
import { useAuthStore } from "@/stores/auth.store";
import React, { useState } from "react";
import { CommonModal } from "../common/Modal";
import { Edit } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ProfileAbout = () => {
  const userData = useAuthStore((state) => state.data);
  const updateProfileAction = useAuthStore(
    (state) => state.updateProfileAction
  );
  const profileLoading = useAuthStore((state) => state.profileLoading);
  const [formData, setFormData] = useState(userData?.about || "");
  const handleSaveChanges = () => {
    updateProfileAction({ about: formData });
  };
  return (
    <div className="px-6 py-4 border-t  flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">About</h2>
        <p className="text-gray-600 mt-2">{userData?.about}</p>
      </div>
      <CommonModal
        triggerContent={
          <button className="flex items-center gap-2 px-4 h-12 border border-gray-400 text-gray-600 rounded-full hover:text-gray-800 hover:border-gray-500 hover:bg-gray-50 transition duration-200">
            <Edit className="w-6 h-4" />
            Edit
          </button>
        }
        title="Edit Profile"
        description="Make changes to your profile here. Click save when you're done."
        footer={
          <Button type="submit" onClick={handleSaveChanges}>
            Save changes
          </Button>
        }
        loading={profileLoading}
        handleSaveChanges={handleSaveChanges}
        btnText="Update"
      >
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            About
          </Label>
          <Input
            id="name"
            value={formData.about}
            onChange={(e) => setFormData(e.target.value)}
            className="col-span-3"
          />
        </div>
      </CommonModal>
    </div>
  );
};

export default ProfileAbout;

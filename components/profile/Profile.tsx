import React from "react";
import ProfileHeader from "./Profile-header";
import ProfileAbout from "./Profile-about";
import ProfileFollowInformation from "./Follow-information";
import ProfileNavbar from "./Profile-navbar";
import ProfileRecentPosts from "./Profile-recent-posts";
const ProfileComponent = () => {
  return (
    <div className=" bg-white flex flex-col gap-3 shadow-lg rounded-lg w-full">
      <ProfileNavbar />
      <ProfileHeader />
      <ProfileAbout />
      <ProfileFollowInformation />
      <div className="px-6 py-4 border-t">
        <div className="flex gap-6">
          <button className="text-blue-500 border-b-2 border-blue-500 pb-2">
            Posts
          </button>
        </div>
      </div>
      <ProfileRecentPosts />
    </div>
  );
};

export default ProfileComponent;

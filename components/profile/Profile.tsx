import React from "react";
import ProfileHeader from "./Profile-header";
import ProfileAbout from "./Profile-about";
import ProfileFollowInformation from "./Follow-information";
import ProfileNavbar from "./Profile-navbar";
const ProfileComponent = () => {
  return (
    <div className=" bg-white flex flex-col gap-3 shadow-lg rounded-lg w-full">
      <ProfileNavbar />
      <ProfileHeader
        jobRole="Software Engineer | Open Source Enthusiast"
        name="Subham"
      />
      <ProfileAbout
        about="Passionate about building scalable web applications and exploring new
        technologies. Loves to contribute to open-source projects and write
        technical blogs."
      />
      <ProfileFollowInformation posts={120} followers={300} following={340} />
      <div className="px-6 py-4 border-t">
        <div className="flex gap-6">
          <button className="text-blue-500 border-b-2 border-blue-500 pb-2">
            Posts
          </button>
          <button className="text-gray-600 hover:text-blue-500">Gallery</button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800">Recent Posts</h3>
        <div className="mt-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4">
            <h4 className="font-bold text-gray-800">Exploring Tailwind CSS</h4>
            <p className="text-gray-600">
              Tailwind CSS makes styling effortless...
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-gray-800">React Hooks: A Guide</h4>
            <p className="text-gray-600">
              React hooks simplify state management...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;

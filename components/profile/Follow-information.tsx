import React from "react";
const ProfileFollowInformation: React.FC<{
  posts: number;
  followers: number;
  following: number;
}> = ({ posts, followers, following }) => {
  return (
    <div className="px-6 py-4 border-t flex gap-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800">{posts}</h3>
        <p className="text-gray-600">Posts</p>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800">{followers}</h3>
        <p className="text-gray-600">Followers</p>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800">{following}</h3>
        <p className="text-gray-600">Following</p>
      </div>
    </div>
  );
};

export default ProfileFollowInformation;

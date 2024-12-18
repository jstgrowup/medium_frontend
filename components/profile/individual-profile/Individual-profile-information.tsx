import React from "react";
import ProfileInfoLoader from "../loaders/Profile-info-loader";
interface IndividualProfileFollowInformationProps {
  followerCount: number;
  followingCount: number;
  postCount: number;
  loading: boolean;
}
const IndividualProfileFollowInformation: React.FC<
  IndividualProfileFollowInformationProps
> = ({ followerCount, followingCount, postCount, loading }) => {
  return (
    <div className="px-6 py-4 border-t flex gap-6">
      {loading ? (
        <ProfileInfoLoader />
      ) : (
        <>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800">{postCount}</h3>
            <p className="text-gray-600">Posts</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800">{followerCount}</h3>
            <p className="text-gray-600">Followers</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800">
              {followingCount}
            </h3>
            <p className="text-gray-600">Following</p>
          </div>
        </>
      )}
    </div>
  );
};

export default IndividualProfileFollowInformation;

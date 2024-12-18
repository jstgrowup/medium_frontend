import React from "react";
import ProfileAboutLoader from "../loaders/profile-about-loader";
interface ProfileAboutProps {
  about: string;
  loading: boolean;
}
const IndividualProfileAbout: React.FC<ProfileAboutProps> = ({
  about,
  loading,
}) => {
  return (
    <div className="px-6 py-4 border-t flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">About</h2>
        {loading ? (
          <ProfileAboutLoader />
        ) : (
          <p className="text-gray-600 mt-2">{about}</p>
        )}
      </div>
    </div>
  );
};

export default IndividualProfileAbout;

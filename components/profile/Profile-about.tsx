import React from "react";

const ProfileAbout: React.FC<{ about: string }> = ({ about }) => {
  return (
    <div className="px-6 py-4 border-t">
      <h2 className="text-lg font-semibold text-gray-800">About</h2>
      <p className="text-gray-600 mt-2">
        Passionate about building scalable web applications and exploring new
        technologies. Loves to contribute to open-source projects and write
        technical blogs.
      </p>
    </div>
  );
};

export default ProfileAbout;

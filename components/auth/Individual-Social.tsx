import React from "react";
const IndividualSocial: React.FC<{ image: string; callback: () => void }> = ({
  image,
  callback,
}) => {
  return (
    <div
      onClick={() => callback()}
      className="cursor-pointer w-full flex items-center justify-center  px-10 py-3 border border-gray-300 rounded-md shadow-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
    >
      <img className="h-6 w-6" src={image} alt="" />
    </div>
  );
};

export default IndividualSocial;

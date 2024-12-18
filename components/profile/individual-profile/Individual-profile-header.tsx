import { FollowersRecommendationsResponseBody } from "@/utils/types.ts/follow.types";
import { Loader2 } from "lucide-react";
import React from "react";
interface ProfileHeaderProps {
  name: string;
  role: string;
  isFollowing: number;
  profileId: string;
  btnLoading: boolean;
  followUserAction: (
    followingId: string
  ) => Promise<FollowersRecommendationsResponseBody | undefined>;
  setrefresh: React.Dispatch<React.SetStateAction<boolean>>;
  refresh: boolean;
}
const IndividualProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  role,
  isFollowing,
  followUserAction,
  profileId,
  btnLoading,
  setrefresh,
  refresh,
}) => {
  return (
    <div className="pt-20 px-6">
      <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
      <p className="text-gray-600">{role}</p>
      <div className="mt-4 flex gap-4 justify-between">
        <div className="gap-3 flex">
          <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-full shadow-md hover:bg-gray-200">
            Message
          </button>
          <button
            disabled={btnLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-gray-200"
            onClick={() => {
              followUserAction(profileId);
              setrefresh(!refresh);
            }}
          >
            {btnLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : isFollowing > 0 ? (
              "Unfollow"
            ) : (
              "Follow"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualProfileHeader;

"use client";
import { useAuthStore } from "@/stores/auth.store";
import React, { useEffect, useState } from "react";
import { useFollowStore } from "@/stores/follow.store";
import { useParams } from "next/navigation";
import IndividualProfileNavbar from "./Individual-profile-navbar";
import IndividualProfileHeader from "./Individual-profile-header";
import IndividualProfileAbout from "./Individual-profile-about";
import IndividualProfileFollowInformation from "./Individual-profile-information";

const IndividualProfileComponent = () => {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const [refresh, setrefresh] = useState<boolean>(false);
  const {
    loading: authLoading,
    userProfile,
    getUserProfile,
  } = useAuthStore((state) => state);
  const {
    profileFollowerCount,
    profileFollowingCount,
    profilePostCount,
    followUserAction,
    profileFollowDetailsAction,
    loading,
    isFollowing,
    btnLoading,
  } = useFollowStore((state) => state);

  useEffect(() => {
    getUserProfile(id);
    profileFollowDetailsAction(id);
  }, [refresh]);

  return (
    <div className=" bg-white flex flex-col gap-3 shadow-lg rounded-lg w-full">
      <IndividualProfileNavbar
        loading={authLoading}
        profilePic={userProfile?.profilePic ?? ""}
      />
      <IndividualProfileHeader
        name={userProfile?.name ?? ""}
        role={userProfile?.role ?? ""}
        isFollowing={isFollowing}
        followUserAction={followUserAction}
        profileId={id}
        btnLoading={btnLoading}
        setrefresh={setrefresh}
        refresh={refresh}
      />
      <IndividualProfileAbout
        about={userProfile?.about ?? ""}
        loading={loading}
      />
      <IndividualProfileFollowInformation
        followerCount={profileFollowerCount}
        followingCount={profileFollowingCount}
        postCount={profilePostCount}
        loading={loading}
      />
      <div className="px-6 py-4 border-t">
        <div className="flex gap-6">
          <button className="text-blue-500 border-b-2 border-blue-500 pb-2">
            Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualProfileComponent;

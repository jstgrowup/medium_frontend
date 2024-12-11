"use client";
import { Button } from "@/components/ui/button";
import { useFollowStore } from "@/stores/follow.store";
import BlogFollowerSidebarLoader from "./Blog-followers-sidebar-loader";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WhoToFollow() {
  const { followRecommendations, loading, followUserAction, btnLoading } =
    useFollowStore((state) => state);
  if (loading) {
    return (
      <div className="flex flex-col gap-3">
        <BlogFollowerSidebarLoader />
        <BlogFollowerSidebarLoader />
        <BlogFollowerSidebarLoader />
      </div>
    );
  }
  return (
    <div className="p-4 space-y-4 bg-white shadow-md rounded-lg w-full ">
      <h2 className="text-lg font-semibold">Who to follow</h2>
      {followRecommendations && followRecommendations?.length > 0 ? (
        followRecommendations.map((user, index) => (
          <Link href={`/profile/${user.id}`}>
            <div
              key={index}
              className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md border border-gray-300"
            >
              <div className="flex items-center space-x-3 ">
                <div className="h-12 w-12 rounded-full  flex justify-center items-center">
                  <Image
                    src={user.profilePic}
                    alt={"/no-profile.jpg"}
                    className="rounded-full object-cover w-full h-full"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <p className="font-semibold text-lg">{user.name}</p>
                  <p className="font-normal text-sm">{user.role}</p>
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                disabled={btnLoading}
                onClick={() => followUserAction(user.id)}
              >
                {btnLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Follow"
                )}
              </Button>
            </div>
          </Link>
        ))
      ) : (
        <p>No followers recommendations</p>
      )}
    </div>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { useFollowStore } from "@/stores/follow.store";
import BlogFollowerSidebarLoader from "./Blog-followers-sidebar-loader";

export default function WhoToFollow() {
  const { followRecommendations, loading } = useFollowStore((state) => state);
  if (loading) {
    return (
      <div>
        <BlogFollowerSidebarLoader />
        <BlogFollowerSidebarLoader />
        <BlogFollowerSidebarLoader />
      </div>
    );
  }
  return (
    <div className="p-4 space-y-4 bg-white shadow-md rounded-lg w-full ">
      <h2 className="text-lg font-semibold">Who to follow</h2>
      {followRecommendations.map((user, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md border border-gray-300"
        >
          <div className="flex items-center space-x-3 ">
            <div className="h-10 w-12 rounded-full  flex justify-center items-center">
              <img
                src={"/profile.jpg"}
                alt={user.name}
                className="rounded-full "
              />
            </div>
            <div>
              <p className="font-medium">{user.name}</p>
            </div>
          </div>
          <Button size="sm" variant="outline">
            Follow
          </Button>
        </div>
      ))}
    </div>
  );
}

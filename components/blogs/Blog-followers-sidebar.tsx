import { Button } from "@/components/ui/button"; // shadcn's Button component
import Image from "next/image"; // For avatars (optional)

export default function WhoToFollow() {
  const users = [
    {
      name: "Tari Ibaba",
      description: "Software developer, writer, and entrepreneur.",
      avatar: "/profile.jpg",
    },
    {
      name: "Mac O'Clock",
      description: "The best stories for Apple owners and enthusiasts.",
      avatar: "/profile.jpg",
    },
    {
      name: "Lewis J Doyle",
      description:
        "I'm a chap that loves tech and productivity so tend to write...",
      avatar: "/profile.jpg",
    },
  ];

  return (
    <div className="w-full max-w-md p-4 space-y-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold">Who to follow</h2>
      {users.map((user, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md"
        >
          <div className="flex items-center space-x-3 ">
            <div className="h-10 w-12 rounded-full  flex justify-center items-center">
              <img
                src={user.avatar}
                alt={user.name}
                className="rounded-full "
              />
            </div>
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-500">{user.description}</p>
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

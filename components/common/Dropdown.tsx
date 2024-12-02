import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
const Dropdown: React.FC<{
  logoutAction: () => void;
  userName: string;
  profileRedirect: () => void;
}> = ({ logoutAction, userName, profileRedirect }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={`relative cursor-pointer border-black border-2 inline-flex items-center justify-center overflow-hidden bg-white rounded-full  ${"w-10 h-10"}`}
        >
          <span
            className={`text-xl font-extralight text-black dark:text-gray-300 `}
          >
            {userName ? userName : ""}
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 cursor-pointer">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={profileRedirect}
          >
            <User />
            <span>Profile</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logoutAction} className="cursor-pointer">
          <LogOut />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;

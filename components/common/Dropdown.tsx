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

const Dropdown: React.FC<{ logoutAction: () => void }> = ({ logoutAction }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={`relative  border-black border-2 inline-flex items-center justify-center overflow-hidden bg-white rounded-full  ${"w-10 h-10"}`}
        >
          <span
            className={`${"text-md"} font-extralight text-black dark:text-gray-300`}
          >
            S
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User />
            <span>Profile</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logoutAction}>
          <LogOut />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;

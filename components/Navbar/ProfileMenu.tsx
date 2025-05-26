import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import links from "@/utils/links";
import SignOutLink from "./SignOutLink";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

function ProfileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          <AlignLeft />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* Login Already */}
        <SignedIn>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {links.map((link, index) => (
            <DropdownMenuItem key={index}>
              <Link href={link.href} className="capitalize">
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <SignOutLink />
        </SignedIn>

        {/* Login Not Already */}
        <SignedOut>
          <div className="flex flex-col space-y-2">
            <SignInButton mode="modal">
              <Button variant={"outline"} className="capitalize my-0.5">login</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button variant={"outline"} className="capitalize my-0.5">register</Button>
            </SignUpButton>
          </div>
        </SignedOut>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default ProfileMenu;

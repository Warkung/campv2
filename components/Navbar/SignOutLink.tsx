"use client";

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

function SignOutLink() {
  const handleClick = () => {
    toast("Logout Successfully.");
  };

  return (
    <SignOutButton>
      <button
        onClick={handleClick}
        className=" w-full font-medium text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded hover:cursor-pointer capitalize"
      >
        logout
      </button>
    </SignOutButton>
  );
}
export default SignOutLink;

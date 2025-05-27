"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

type ButtonPropsType = {
  className?: string;
  size?: "default" | "lg" | "sm";
  text?: string;
};

export default function SubmitButton({
  className,
  size,
  text,
}: ButtonPropsType) {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      className={`${className} capitalize`}
      size={size}
      type="submit"
    >
      {pending ? <Loader className="animate-spin" /> : text}
    </Button>
  );
}

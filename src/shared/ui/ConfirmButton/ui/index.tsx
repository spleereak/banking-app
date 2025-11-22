import React from "react";

import { cn } from "@/utils";

import { I_ConfirmButton } from "../types";

export const ConfirmButton: React.FC<I_ConfirmButton> = ({
  className,
  text,
}) => {
  return (
    <button
      className={cn(
        "bg-yellow-main active:opacity-52 h2 flex h-52 w-full items-center justify-center rounded-full text-black transition-all duration-300 ease-in-out",
        className
      )}
    >
      {text}
    </button>
  );
};

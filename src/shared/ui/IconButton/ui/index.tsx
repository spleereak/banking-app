import React from "react";

import { cn } from "@/utils";

import { I_IconButton } from "../types";

export const IconButton: React.FC<I_IconButton> = ({
  children,
  className,
  buttonClassName,
  text,
}) => {
  return (
    <div
      className={cn(
        "active:opacity-52 flex max-h-max max-w-max flex-col items-center gap-11 transition-all duration-300 ease-in-out",
        className
      )}
    >
      <button
        className={cn(
          "flex h-40 w-40 items-center justify-center rounded-full bg-[rgba(215,255,30,0.13)] p-10",
          buttonClassName
        )}
      >
        {children}
      </button>
      {text && <p className="p">{text}</p>}
    </div>
  );
};

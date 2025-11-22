import React from "react";

import Image from "next/image";

import { cn } from "@/utils";

import { I_ContactButton } from "../types";

export const ContactButton: React.FC<I_ContactButton> = ({
  icon,
  username,
  className,
}) => {
  return (
    <div
      className={cn(
        "active:opacity-52 flex max-h-max max-w-max flex-col items-center justify-center gap-11 transition-all duration-300 ease-in-out",
        className
      )}
    >
      <button className="w-50 h-50 rounded-full">
        <Image
          src={icon}
          loading="eager"
          priority
          className="w-50 h-50"
          width={50}
          height={50}
          alt="Image"
        />
      </button>
      <p className="caption">{username}</p>
    </div>
  );
};

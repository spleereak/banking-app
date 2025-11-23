"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";

import { cn } from "@/utils";

import { I_MenuButton } from "../types";

export const MenuButton: React.FC<I_MenuButton> = ({
  className,
  text,
  icon,
  activeIcon,
  isActive,
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  return (
    <div
      className={cn(
        "max-w-66 max-h-55 duration-800 flex flex-col items-center justify-center gap-5 rounded-full px-16 py-6 transition-all ease-in-out",
        isActive && shouldAnimate && "bg-[#B5B5B56E]",
        className
      )}
    >
      <Image
        src={isActive ? activeIcon : icon}
        loading="eager"
        priority
        className="h-24 w-24"
        width={24}
        height={24}
        alt="Image"
      />
      <p
        className={cn(
          "caption text-white transition-colors duration-500",
          isActive && "text-yellow-main"
        )}
      >
        {text}
      </p>
    </div>
  );
};

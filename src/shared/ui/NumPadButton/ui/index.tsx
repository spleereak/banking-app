import React from "react";

import Image from "next/image";

import { cn } from "@/utils";

import { I_NumPadButton } from "../types/props";

export const NumPadButton: React.FC<I_NumPadButton> = ({
  className,
  content,
}) => {
  return (
    <button
      className={cn(
        "bg-grey-specific w-97 active:opacity-52 flex h-52 items-center justify-center rounded-full transition-all duration-300 ease-in-out",
        className
      )}
    >
      {content.startsWith("/icons") ||
      content.startsWith("http://") ||
      content.startsWith("https://") ? (
        <Image
          src={content}
          className="w-22 h-22"
          width={22}
          height={22}
          alt="Image"
          loading="eager"
          priority
        />
      ) : (
        <p className="specific">{content}</p>
      )}
    </button>
  );
};

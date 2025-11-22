import React from "react";

import Image from "next/image";

import { cn } from "@/utils";

import { I_FunctionalCard } from "../types";

export const FunctionalCard: React.FC<I_FunctionalCard> = ({
  text,
  icon,
  className,
}) => {
  return (
    <div
      className={cn(
        "w-74 h-74 active:opacity-52 flex flex-col gap-6 rounded-[0.625rem] bg-black p-6 transition-all duration-300 ease-in-out",
        className
      )}
    >
      <div className="bg-grey flex items-center justify-center place-self-end rounded-[0.3125rem] p-7">
        <Image
          src={icon}
          className="h-14 w-14"
          alt="Image"
          loading="eager"
          width={14}
          height={14}
          priority
        />
      </div>
      <p className="caption max-w-37 place-self-start">{text}</p>
    </div>
  );
};

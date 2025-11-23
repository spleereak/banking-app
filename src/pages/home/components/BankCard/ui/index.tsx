import React from "react";

import Image from "next/image";

import { cn } from "@/utils";

import { I_BankCard } from "../types";

export const BankCard: React.FC<I_BankCard> = ({ className, data }) => {
  return (
    <div
      className={cn(
        "h-195 relative flex w-full flex-col rounded-[1.5625rem] p-16",
        className
      )}
    >
      <Image
        src={data.cardImage}
        alt="Image"
        fill
        className="max-w-327 absolute bottom-0 left-0 right-0 top-0"
        quality={100}
        loading="eager"
        priority
      />
      <div className="z-30 flex h-full flex-col justify-between">
        <p className="p z-30 text-[#000000]">{`ID ${data.cardId}`}</p>
        <div className="z-30 flex flex-col">
          <p className="p text-grey-middle z-30">Balance</p>
          <h2 className="card z-30 text-[#000000]">{`$${data.balance}`}</h2>
        </div>
        <div className="z-30 flex flex-col gap-3">
          <p className="p text-grey-middle z-30">{data.userId}</p>
          <p className="p z-30 text-[#000000]">{data.username}</p>
        </div>
      </div>
    </div>
  );
};

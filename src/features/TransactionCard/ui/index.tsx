import React from "react";

import Image from "next/image";

import { cn, formatAmount } from "@/utils";

import { I_TransactionCard } from "../types/props";

export const TransactionCard: React.FC<I_TransactionCard> = ({
  transaction,
  className,
}) => {
  return (
    <div className={cn("flex h-44 flex-row items-center gap-8", className)}>
      <Image
        src={transaction.userAvatar}
        alt="Image"
        width={44}
        height={44}
        className="h-44 w-44 rounded-full object-cover"
      />
      <div className="flex w-full flex-col gap-5">
        <div className="flex flex-row justify-between">
          <h2 className="h2">{transaction.username}</h2>
          <h2 className="h2">{formatAmount(transaction.payment_amount)}</h2>
        </div>
        <div className="flex flex-row justify-between text-[#FFFFFF80]">
          <p className="caption">{transaction.date}</p>
          <p className="caption">{transaction.time}</p>
        </div>
      </div>
    </div>
  );
};

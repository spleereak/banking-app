"use client";

import React from "react";

import { TransactionCard } from "@/features/TransactionCard/ui";
import { Accordion } from "@/shared/ui/Accordion/ui";
import { cn } from "@/utils";

import { I_TransactionsBlock } from "../types";

export const TransactionsBlock: React.FC<I_TransactionsBlock> = ({
  className,
  transactionsHistory,
}) => {
  const [activeAccordion, setActiveAccordion] = React.useState(0);

  const handleClick = (id: number) => {
    if (activeAccordion === id) {
      setActiveAccordion(0);
    } else {
      setActiveAccordion(id);
    }
  };

  return (
    <div
      className={cn(
        "gap-19 bg-grey flex flex-col rounded-[1.5625rem] p-16",
        className
      )}
    >
      <h2 className="h2">Transactions</h2>
      <div className="flex flex-row items-start gap-20">
        <Accordion
          title="August"
          data={["text", "text", "text"]}
          className="bg-yellow-main z-20"
          isOpen={activeAccordion === 1}
          setIsOpen={handleClick}
          id={1}
        />
        <Accordion
          title="Transfers"
          data={["text", "text", "text"]}
          className="z-20"
          isOpen={activeAccordion === 2}
          setIsOpen={handleClick}
          id={2}
        />
        <Accordion
          title="Income"
          data={["text", "text", "text"]}
          className="z-20"
          isOpen={activeAccordion === 3}
          setIsOpen={handleClick}
          id={3}
        />
      </div>
      <div className="gap-17 z-3 flex flex-col">
        {transactionsHistory.map(transaction => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

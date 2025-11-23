import Image from "next/image";

import { IconButton } from "@/shared/ui/IconButton/ui";
import { cn } from "@/utils";

export const FunctionsBlock = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "px-37 py-21 bg-grey flex flex-row justify-between rounded-[1.5625rem]",
        className
      )}
    >
      <IconButton text="Transfer">
        <Image
          alt="Icon"
          src="/icons/transfer.svg"
          width={20}
          height={20}
          className="h-20 w-20 object-cover"
        />
      </IconButton>
      <IconButton text="Deposit">
        <Image
          alt="Icon"
          src="/icons/plus.svg"
          width={20}
          height={20}
          className="h-20 w-20 object-cover"
        />
      </IconButton>
      <IconButton text="Payment">
        <Image
          alt="Icon"
          src="/icons/payment.svg"
          width={20}
          height={20}
          className="h-20 w-20 object-cover"
        />
      </IconButton>
    </div>
  );
};

"use client";

import React from "react";

import Image from "next/image";

import { cn } from "@/utils";

import { I_Accordion } from "../types";

export const Accordion: React.FC<I_Accordion> = ({
  title,
  data,
  className,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLDivElement>(null);

  const [maxWidth, setMaxWidth] = React.useState<number | undefined>(undefined);

  React.useLayoutEffect(() => {
    if (triggerRef.current) {
      setMaxWidth(triggerRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className={cn("rounded-[0.8125rem] bg-white text-black", className)}>
      <div
        ref={triggerRef}
        className={cn(
          "justify-сenter relative z-10 flex w-fit cursor-pointer flex-row items-center gap-4 rounded-full px-9 py-6 transition-all duration-300",
          isOpen && "shadow-[0_4px_25px_0_rgba(0,0,0,0.25)]"
        )}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <p className="p whitespace-nowrap">{title}</p>

        <Image
          src="/icons/pointer.svg"
          loading="eager"
          priority
          className={cn(
            "h-9 w-9 transition-transform duration-300",
            isOpen && "rotate-90"
          )}
          width={9}
          height={6}
          alt="Image"
        />
      </div>

      {maxWidth !== undefined && (
        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out",
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
          style={{ maxWidth: `${maxWidth / 16}rem` }}
        >
          <div className="overflow-x-hidden">
            <div
              className="flex h-full flex-col gap-16 rounded-[0.8125rem] bg-white px-9 pb-11 pt-10"
              style={{ width: maxWidth }}
            >
              {data.map((d, i) => (
                <p
                  key={i}
                  className={cn(
                    "caption truncate transition-all duration-300 ease-in-out",
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-4 opacity-0"
                  )}
                  style={{
                    transitionDelay: isOpen ? "50ms" : "0ms",
                  }}
                >
                  {d}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

"use client";

import React from "react";

import Image from "next/image";

import { cn } from "@/utils";

import { I_Accordion } from "../types";

export const Accordion: React.FC<I_Accordion> = ({
  title,
  data,
  className,
  isOpen,
  setIsOpen,
  id,
}) => {
  const [activeValue, setActiveValue] = React.useState(title);

  const triggerRef = React.useRef<HTMLDivElement>(null);

  const [maxWidth, setMaxWidth] = React.useState<number | undefined>(undefined);
  const [paddingTop, setPaddingTop] = React.useState<number>(0);

  React.useLayoutEffect(() => {
    if (triggerRef.current) {
      setMaxWidth(triggerRef.current.offsetWidth);
      setPaddingTop((triggerRef.current.offsetHeight + 10) / 16);
    }
  }, []);

  const handleClick = (value: string) => {
    setActiveValue(value);
    setIsOpen(id);
  };

  return (
    <div className={cn("relative rounded-[0.8125rem]", className)}>
      <div
        ref={triggerRef}
        className={cn(
          "justify-сenter relative z-10 flex w-fit cursor-pointer flex-row items-center gap-4 rounded-full bg-white px-9 py-6 transition-all duration-300",
          isOpen && "shadow-[0_4px_25px_0_rgba(0,0,0,0.25)]",
          className
        )}
        onClick={() => setIsOpen(id)}
      >
        <p className="p whitespace-nowrap text-black">{activeValue}</p>

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
            "absolute left-0 top-0 z-0 transition-all duration-300 ease-in-out",
            isOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
          )}
          style={{ maxWidth: `${maxWidth / 16}rem` }}
        >
          <div
            className={cn(
              "flex h-full flex-col gap-16 rounded-[0.8125rem] bg-white px-9 pb-11 shadow-[0_4px_25px_0_rgba(0,0,0,0.25)]",
              className
            )}
            style={{
              width: maxWidth,
              paddingTop: `${paddingTop}rem`,
            }}
          >
            {data.map((d, i) => (
              <p
                key={i}
                className={cn(
                  "caption truncate text-black transition-all duration-300 ease-in-out",
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-4 opacity-0"
                )}
                style={{
                  transitionDelay: isOpen ? "50ms" : "0ms",
                }}
                onClick={() => handleClick(d)}
              >
                {d}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

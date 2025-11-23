"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MenuButton } from "../components/MenuButton/ui";

export const Menu = () => {
  const location = usePathname();

  return (
    <div className="bottom-35 fixed left-1/2 z-50 flex -translate-x-1/2 flex-row gap-9 rounded-full border border-[#FFFFFF0F] bg-[rgba(255,255,255,0.06)] p-4 backdrop-blur-[7px]">
      <Link href="/">
        <MenuButton
          icon="/images/home.png"
          activeIcon="/images/active-home.png"
          text="Home"
          isActive={location === "/"}
        />
      </Link>
      <Link href="statistics">
        <MenuButton
          icon="/images/statistic.png"
          activeIcon="/images/active-statistic.png"
          text="Statistics"
          isActive={location === "/statistics"}
        />
      </Link>
      <Link href="profile">
        <MenuButton
          icon="/images/profile.png"
          activeIcon="/images/active-profile.png"
          text="Profile"
          isActive={location === "/profile"}
        />
      </Link>
    </div>
  );
};

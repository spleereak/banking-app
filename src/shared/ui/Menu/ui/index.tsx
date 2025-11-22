import Link from "next/link";

import { getPathname } from "@/shared/lib/helpers";

import { MenuButton } from "../components/MenuButton/ui";

export const Menu = async () => {
  const pathname = await getPathname();

  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 flex-row gap-9 rounded-full border border-[#FFFFFF0F] bg-[rgba(255,255,255,0.06)] p-4 backdrop-blur-[7px]">
      <Link href="/">
        <MenuButton
          icon="/icons/home.svg"
          activeIcon="/icons/active-home.svg"
          text="Home"
          isActive={pathname === "/"}
        />
      </Link>
      <Link href="/statistics">
        <MenuButton
          icon="/icons/statistic.svg"
          activeIcon="/icons/active-statistic.svg"
          text="Statistics"
          isActive={pathname.includes("statistics")}
        />
      </Link>
      <Link href="/profile">
        <MenuButton
          icon="/icons/profile.svg"
          activeIcon="/icons/active-profile.svg"
          text="Profile"
          isActive={pathname.includes("profile")}
        />
      </Link>
    </div>
  );
};

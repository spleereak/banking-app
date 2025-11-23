import Image from "next/image";

import { cn } from "@/utils";

export const HomeHeader = ({ className }: { className?: string }) => {
  const mockData = {
    userAvatar: "/images/useravatar.png",
    username: "Daria Simmons",
  };

  return (
    <div className={cn("flex h-48 flex-row gap-9 px-32", className)}>
      <Image
        src={mockData.userAvatar}
        alt="Image"
        width={100}
        height={100}
        quality={100}
        className="h-48 w-48 rounded-full object-cover"
      />
      <div className="flex h-full flex-col justify-between py-5">
        <p className="p text-grey-middle">Welcome</p>
        <p className="p">{mockData.username}</p>
      </div>
    </div>
  );
};

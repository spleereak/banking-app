import Image from "next/image";

import { Accordion } from "@/shared/ui/Accordion/ui";
import { ConfirmButton } from "@/shared/ui/ConfirmButton/ui";
import { ContactButton } from "@/shared/ui/ContactButton/ui";
import { FunctionalCard } from "@/shared/ui/FunctionalCard/ui";
import { IconButton } from "@/shared/ui/IconButton/ui";
import { Menu } from "@/shared/ui/Menu/ui";
import { NumPadButton } from "@/shared/ui/NumPadButton/ui";

export default function Home() {
  return (
    <>
      <div className="gap-50 flex h-screen w-screen flex-col items-center justify-center px-16">
        <div className="gap-y-50 gap-x-25 grid grid-cols-3">
          <IconButton text="Transfer">
            <Image
              src="/icons/transfer-icon.svg"
              className="w-22 h-22"
              width={22}
              height={22}
              loading="eager"
              alt="Image"
              priority
            />
          </IconButton>
          <ContactButton icon="/icons/contact-icon.svg" username="Ranel G." />
          <NumPadButton content="/icons/backspace.svg" />
        </div>
        <div className="gap-50 bg-grey flex w-full flex-col rounded-[1.5625rem] p-10">
          <NumPadButton content="1" />
          <ConfirmButton text="Send money" />
          <FunctionalCard text="Send money" icon="/icons/plane.svg" />
        </div>
        <Accordion
          title="February"
          data={["Account and Cards", "Feb", "Auq"]}
        />
      </div>
      <Menu />
    </>
  );
}

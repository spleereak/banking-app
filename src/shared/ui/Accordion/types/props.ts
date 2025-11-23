interface SetIsOpenHandler {
  // eslint-disable-next-line no-unused-vars
  (id: number): void;
}

export interface I_Accordion {
  className?: string;
  title: string;
  data: string[];
  isOpen: boolean;
  setIsOpen: SetIsOpenHandler;
  id: number;
}

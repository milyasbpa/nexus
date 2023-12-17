"use client";
import * as React from "react";
import clsx from "clsx";

export interface PersonaDropdownChatProps {
  selected?: null | { id: string; name: string };
  items?: {
    id: string;
    name: string;
  }[];
  onClickSelect?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const PersonaDropdownChat = ({
  selected = null,
  items = [],
  onClickSelect,
}: PersonaDropdownChatProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const handleClickSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen((_) => false);
    if (!onClickSelect) return;
    onClickSelect(e);
  };

  return (
    <div className={clsx("relative")}>
      <button onClick={handleClick}>
        <img
          src={"/icons/chat/menu.svg"}
          className={clsx("w-[1.5rem] h-[1.5rem]")}
        />
      </button>

      <div
        className={clsx(
          isOpen ? "grid" : "hidden",
          "absolute right-0 top-[2.25rem]",
          "z-10",
          "grid-cols-1 items-start content-start justify-end justify-items-end",
          "w-[188px]",
          "bg-[white]",
          "rounded-[0.5rem]",
          "overflow-hidden",
          "border border-[#BFCAD7]"
        )}
      >
        {items.map((item, itemIndex) => (
          <button
            key={itemIndex}
            className={clsx(
              "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]",
              "w-full",
              "px-[0.5rem] py-[0.75rem]",
              "bg-[white]"
            )}
            value={item.id}
            onClick={handleClickSelect}
          >
            <img
              src={
                item.id === selected?.id
                  ? "/icons/chat/persona_checked.svg"
                  : "/icons/chat/persona_unchecked.svg"
              }
              className={clsx("w-[1.125rem] h-[1.125rem]")}
            />
            <p
              className={clsx(
                "text-[0.75rem] font-normal font-plusJakartaSans",
                item.id === selected?.id ? "text-[#002566]" : "text-[#404852]"
              )}
            >
              {item.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

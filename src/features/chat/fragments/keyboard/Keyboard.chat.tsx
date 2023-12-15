'use client'
import { ArrowUpIcon } from "@heroicons/react/20/solid";
import * as React from "react";
import clsx from "clsx";

export interface KeyboardChatProps {}

export const KeyboardChat = (props: KeyboardChatProps) => {
//   const [isSuggestionShowed, setIsSuggestionShowed] =
//     React.useState<boolean>(true);

  const handleClick = () => {
    // setIsSuggestionShowed(true);
  };
  return (
    <div
      className={clsx(
        "grid grid-cols-[auto_1fr] items-center content-center justify-start justify-items-start gap-[0.5rem]",
        "w-full",
        "p-[1rem]",
        "bg-[#9AA8B8]",
        "absolute",
        "bottom-0 right-0 left-0"
      )}
    >
      <button onClick={handleClick}>
        <img
          src={"/icons/chat/hint.svg"}
          className={clsx("w-[1.5rem] h-[1.5rem]")}
        />
      </button>
      <div
        className={clsx(
          "grid grid-cols-[1fr_auto] items-center content-center justify-start justify-items-start",
          "w-full",
          "bg-white",
          "px-[0.5rem] py-[0.75rem]",
          "rounded-[0.25rem]"
        )}
      >
        <input
          className={clsx(
            "w-full",
            "placeholder:text-[1rem] placeholder:font-normal placeholder:text-[#697584]",
            "text-[1rem] font-normal text-[#232931]",
            "outline-none"
          )}
          placeholder={"Type your question"}
        />
        <button className={clsx("bg-[#002566]", "rounded-[0.25rem]")}>
          <ArrowUpIcon
            className={clsx("w-[1.25rem] h-[1.25rem]", "text-white")}
          />
        </button>
      </div>
    </div>
  );
};

"use client";
import * as React from "react";
import clsx from "clsx";
import { TrashIcon } from "@heroicons/react/20/solid";
import { useChatGetChatSuggestionNexus } from "../../react_query/hooks/useGetChatSuggestionNexus.chat";

export const SuggestionChat = () => {
  useChatGetChatSuggestionNexus();
  const items = [
    {
      message:
        "What legal aspects are important to consider based on this bank statement?",
    },
  ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    //
  };

  const handleClickClearChat = () => {
    //
  };
  return (
    <div
      className={clsx(
        "grid grid-cols-1 items-center content-center justify-start justify-items-start gap-[0.5rem]",
        "w-full",
        "px-[0.75rem] py-[1rem]",
        "bg-[white]",
        "absolute",
        "bottom-[76px] right-0 left-0",
        "border border-[#BFCAD7]"
      )}
    >
      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-items-start justify-between",
          "w-full"
        )}
      >
        <p className={clsx("text-[1.125rem] font-medium text-[#002566]")}>
          {"Suggestion"}
        </p>

        <div
          className={clsx(
            "grid grid-flow-col items-center content-center justify-end justify-items-end gap-[0.5rem]"
          )}
        >
          <button onClick={handleClickClearChat}>
            <img
              src={"/icons/chat/trash.svg"}
              className={clsx("w-[1.5rem] h-[1.5rem]")}
            />
          </button>
        </div>
      </div>

      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
          "w-full",
          "px-[0.5rem] py-[1rem]",
          "bg-[#F4F8FC]",
          "rounded-[0.25rem]"
        )}
      >
        <p className={clsx("text-[1rem] font-semibold text-[#002566]")}>
          {"Analyze"}
        </p>
        {items.map((item, itemIndex) => (
          <button
            key={itemIndex}
            className={clsx(
              "grid grid-cols-1 place-content-start place-items-start",
              "w-full",
              "bg-white",
              "rounded-[0.5rem]",
              "px-[0.5rem] py-[0.5rem]"
            )}
            value={item.message}
            onClick={handleClick}
          >
            <p className={clsx("text-[0.875rem] font-normal text-[#404852]")}>
              {item.message}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

'use client'
import * as React from "react";
import clsx from "clsx";

export interface UserBubbleConversationProps {
  message?: string;
}

export const UserBubbleConversation = ({
  message = "",
}: UserBubbleConversationProps) => {
  return (
    <div
      className={clsx(
        "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]",
        "w-full",
        "px-[1rem] py-[1rem]",
        "bg-[white]"
      )}
    >
      <div
        className={clsx(
          "flex items-center justify-center",
          "bg-[#002566]",
          "rounded-[0.25rem]",
          "w-[1.75rem] h-[1.75rem]"
        )}
      >
        <img
          src={"/icons/chat/person.svg"}
          className={clsx("w-[1rem] h-[1rem]")}
        />
      </div>
      <p
        className={clsx("text-left text-[#232931] text-[0.875rem] font-normal")}
      >
        {message}
      </p>
    </div>
  );
};

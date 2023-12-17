"use client";
import * as React from "react";
import clsx from "clsx";

export interface ErrorBubbleConversationProps {
  message?: string;
}

export const ErrorBubbleConversation = ({
  message = "",
}: ErrorBubbleConversationProps) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 items-center content-center justify-start justify-items-start gap-[0.5rem]",
        "w-full",
        "px-[1rem] py-[1rem]",
        "bg-[#FFF0F0]"
      )}
    >
      <p
        className={clsx("text-left text-[#662424] text-[0.875rem] font-normal")}
      >
        {message}
      </p>
    </div>
  );
};

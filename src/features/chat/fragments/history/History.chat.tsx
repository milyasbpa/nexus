"use client";
import * as React from "react";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import { ChatForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";
import { libreBaskerville } from "@/core/fonts";
import { UserBubbleConversation } from "../../components/user_bubble_conversation";

export const HistoryChat = () => {
  const { watch, setValue } = useFormContext<ChatForm>();
  const dictionaries = getDictionaries("en");
  const histories = watch(
    dictionaries.conversation.history.name
  ) as typeof dictionaries.conversation.history.default_data;
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start",
        "w-full",
        "pt-[58px]"
      )}
    >
      {histories.map(
        (
          history: (typeof dictionaries.conversation.history.default_data)[0],
          historyIndex: number
        ) => {
          if (history.user.toLowerCase().includes("user")) {
            return (
              <UserBubbleConversation
                key={historyIndex}
                message={history.message}
              />
            );
          }
          return (
            <div
              key={historyIndex}
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-[0.5rem]",
                "w-full",
                "px-[1rem] py-[1rem]",
                "bg-[#F4F8FC]"
              )}
            >
              <div
                className={clsx(
                  "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]",
                  "w-full"
                )}
              >
                <div
                  className={clsx(
                    "flex items-center justify-center",
                    "bg-[#244E46]",
                    "rounded-[0.25rem]",
                    "text-[0.75rem] font-medium text-[white]",
                    libreBaskerville.className,
                    "w-[1.75rem] h-[1.75rem]"
                  )}
                >
                  {history.user.split(" ").reduce((acc: any, value: string) => {
                    const firstChar = value.charAt(0);
                    return `${acc}${firstChar}`;
                  }, "")}
                </div>
                <p
                  className={clsx(
                    "teext-[0.875rem] text-[#232931] font-medium"
                  )}
                >
                  {history.user}
                </p>
              </div>
              <div
                className={clsx(
                  "grid grid-cols-1 place-content-start place-items-start",
                  "pl-[2.25rem]",
                  "w-full"
                )}
              >
                <p
                  className={clsx(
                    "text-[0.875rem] text-[#232931] font-normal text-left"
                  )}
                >
                  {history.message}
                </p>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

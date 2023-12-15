"use client";
import * as React from "react";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import { ChatForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";
import { libreBaskerville } from "@/core/fonts";
import { UserBubbleConversation } from "../../components/user_bubble_conversation";
import { useChatGetChatHistoryNexus } from "../../react_query/hooks/useGetChatHistoryNexus.chat";

export const HistoryChat = () => {
  const { watch, setValue } = useFormContext<ChatForm>();
  const dictionaries = getDictionaries("en");
  useChatGetChatHistoryNexus();
  const histories = watch(
    dictionaries.conversation.history.name
  ) as typeof dictionaries.conversation.history.default_data;

  React.useEffect(() => {
    setValue(
      dictionaries.conversation.history.name,
      (
        watch(dictionaries.conversation.history.name) as {
          message: string;
          initial: string;
          user: string;
        }[]
      ).map((history) => {
        return {
          ...history,
          message: history.message.replaceAll("{{name}}", "Nadia"),
        };
      })
    );
  }, []);
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start",
        "w-full",
        "h-[calc(100vh_-_68px_-_80px)]",
        "pt-[58px]",
        "overflow-auto"
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
                  {history.initial}
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

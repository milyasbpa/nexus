"use client";
import * as React from "react";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import { ChatForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";
import { UserBubbleConversation } from "../../components/user_bubble_conversation";
import { useChatGetChatHistoryNexus } from "../../react_query/hooks/useGetChatHistoryNexus.chat";
import { queryClient } from "@/core/config/react_query";
import { ChatReactQueryKey } from "../../react_query/keys";
import { UserStorageInterface } from "@/core/models/storage";
import PersonaBubbleConversationChat from "../../components/persona_bubble_conversation/PersonaBubbleConversation.chat";

export const HistoryChat = () => {
  const { watch, setValue } = useFormContext<ChatForm>();
  const dictionaries = getDictionaries("en");
  useChatGetChatHistoryNexus();
  const histories = watch(
    dictionaries.conversation.history.name
  ) as typeof dictionaries.conversation.history.default_data;

  const lastRefView = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!lastRefView) return;
    const lastChildElement = lastRefView.current?.lastElementChild;
    lastChildElement?.scrollIntoView({ behavior: "smooth" });
  }, [lastRefView, histories]);

  const name =
    (
      queryClient.getQueryData(ChatReactQueryKey.GetUserStorage()) as
        | undefined
        | UserStorageInterface
    )?.email ?? "";

  React.useEffect(() => {
    if (!!name.length) {
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
            message: history.message.replaceAll("{{name}}", name),
          };
        })
      );
    }
  }, [name]);

  return (
    <div
      id={"conversation_history-chat"}
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start",
        "w-full",
        "h-[calc(100vh_-_68px_-_80px)]",
        "pt-[58px]",
        "overflow-auto"
      )}
      ref={lastRefView}
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
            <PersonaBubbleConversationChat
              key={historyIndex}
              initial={history.initial}
              user={history.user}
              message={history.message}
            />
          );
        }
      )}
    </div>
  );
};

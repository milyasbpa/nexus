"use client";
import * as React from "react";
import clsx from "clsx";
import { DocumentChat } from "../fragments/document";
import { ConversationChat } from "../fragments/conversation";

import { useChatGetUserStorage } from "../react_query/hooks/useGetUserStorage.chat";
import { useChatGetChatStorage } from "../react_query/hooks/useGetChatStorage.chat";
import { NavigationChat } from "../fragments/navigation";

export const ChatContainer = () => {
  useChatGetUserStorage();
  useChatGetChatStorage();

  return (
    <div className={clsx("w-full", "relative")}>
      {/* navbar */}
      <NavigationChat />
      {/* content */}
      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start",
          "w-full",
          "relative pt-[68px]",
          "overflow-y-hidden"
        )}
      >
        <div
          className={clsx(
            "grid grid-cols-2 place-content-start place-items-start",
            "w-full"
          )}
        >
          <DocumentChat />
          <ConversationChat />
        </div>
      </div>
    </div>
  );
};

"use client";
import * as React from "react";
import clsx from "clsx";
import { ArrowUpIcon } from "@heroicons/react/20/solid";
import { libreBaskerville } from "@/core/fonts";
import { KeyboardChat } from "../keyboard";
import { SuggestionChat } from "../suggestion";
import { HistoryChat } from "../history";
import { PersonaChat } from "../persona";

export interface ConversationChatProps {}

export const ConversationChat = (props: ConversationChatProps) => {
  return (
    <div className={clsx("relative", "w-full", "h-[calc(100vh_-_68px)]")}>
      {/* pesona */}
      <PersonaChat />
      {/* history */}
      <HistoryChat />
      {/* suggestion */}
      <SuggestionChat />
      {/* chat */}
      <KeyboardChat />
    </div>
  );
};

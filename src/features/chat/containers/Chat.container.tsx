import * as React from "react";
import clsx from "clsx";
import { DocumentChat } from "../fragments/document";
import { ConversationChat } from "../fragments/conversation";
import { libreBaskerville } from "@/core/fonts";

export interface ChatContainerProps {}

export const ChatContainer = (props: ChatContainerProps) => {
  return (
    <div className={clsx("w-full", "relative")}>
      {/* navbar */}
      <div
        className={clsx(
          "absolute top-0 left-0 right-0",
          "z-40",
          "bg-[#F4F8FC]",
          "h-[68px]",
          "px-[1.5rem] lg:px-[52px]",
          "grid grid-flow-col justify-between justify-items-start items-center content-center",
          "w-full"
        )}
      >
        <h1 className={clsx("text-[0.875rem] text-[#232931] font-normal")}>
          {"Back"}
        </h1>

        {/* menu */}

        <div
          className={clsx(
            "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[1rem]"
          )}
        >
          <h1
            className={clsx(
              "text-[26px] text-[#232931] font-normal tracking-[4.68px]",
              libreBaskerville.className
            )}
          >
            {"NEXUS"}
          </h1>
        </div>

        <div></div>
      </div>
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
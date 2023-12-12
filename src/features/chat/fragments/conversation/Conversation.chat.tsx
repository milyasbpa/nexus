import * as React from "react";
import clsx from "clsx";
import { ArrowUpIcon } from "@heroicons/react/20/solid";
import { libreBaskerville } from "@/core/fonts";

export interface ConversationChatProps {}

export const ConversationChat = (props: ConversationChatProps) => {
  return (
    <div className={clsx("relative", "w-full", "h-[calc(100vh_-_68px)]")}>
      {/* pesona */}
      <div
        className={clsx(
          "absolute top-0 left-0 right-0",
          "px-[1rem] py-[1rem]",
          "grid grid-flow-col items-center content-center justify-between justify-items-start",
          "w-full"
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
              "bg-[#244E46]",
              "rounded-[0.25rem]",
              "text-[0.875rem] font-medium text-[white]",
              libreBaskerville.className,
              "px-[0.5rem] py-[0.5rem]"
            )}
          >
            {"FA"}
          </div>
          <p className={clsx("teext-[0.875rem] text-[#232931] font-medium")}>
            {"Financial Analyst"}
          </p>
        </div>

        <button>
          <img
            src={"/icons/chat/menu.svg"}
            className={clsx("w-[1.5rem] h-[1.5rem]")}
          />
        </button>
      </div>

      {/* suggestion */}

      {/* chat */}
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
        <button>
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
    </div>
  );
};

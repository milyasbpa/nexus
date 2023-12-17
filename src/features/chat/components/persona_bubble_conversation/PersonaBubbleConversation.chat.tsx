import * as React from "react";
import clsx from "clsx";

export interface PersonaBubbleConversationChatProps {
  initial?: string;
  user?: string;
  message?: string;
}

export default function PersonaBubbleConversationChat({
  initial = "",
  user = "",
  message = "",
}: PersonaBubbleConversationChatProps) {
  const handleClickCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText(e.currentTarget.value);
  };
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[0.5rem]",
        "w-full",
        "px-[1rem] py-[1rem]",
        "bg-[#F4F8FC]"
      )}
    >
      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-between justify-items-start gap-[0.5rem]",
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
              "flex items-center justify-center",
              "bg-[#244E46]",
              "rounded-[0.25rem]",
              "text-[0.75rem] font-medium text-[white] font-libreBaskerville",
              "w-[1.75rem] h-[1.75rem]"
            )}
          >
            {initial}
          </div>
          <p className={clsx("teext-[0.875rem] text-[#232931] font-medium")}>
            {user}
          </p>
        </div>

        <button value={message} onClick={handleClickCopy}>
          <img
            src={"/icons/chat/copy.svg"}
            className={clsx("w-[1.25rem] h-[1.25rem]")}
          />
        </button>
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
          {message}
        </p>
      </div>
    </div>
  );
}

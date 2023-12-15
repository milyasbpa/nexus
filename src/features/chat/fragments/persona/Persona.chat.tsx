import * as React from "react";
import clsx from "clsx";
import { libreBaskerville } from "@/core/fonts";

export const PersonaChat = () => {
  return (
    <div
      className={clsx(
        "absolute top-0 left-0 right-0",
        "px-[1rem] py-[1rem]",
        "grid grid-flow-col items-center content-center justify-between justify-items-start",
        "w-full",
        "bg-white"
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
  );
};

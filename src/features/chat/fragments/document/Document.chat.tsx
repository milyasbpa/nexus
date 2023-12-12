import * as React from "react";
import clsx from "clsx";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/20/solid";

export interface DocumentChatProps {}

export const DocumentChat = (props: DocumentChatProps) => {
  return (
    <div className={clsx("w-full")}>
      {/* header */}
      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-items-start justify-between",
          "w-full",
          "px-[1rem]",
          "bg-[#697584]",
          "min-h-[58px]"
        )}
      >
        <div
          className={clsx(
            "grid grid-cols-1 place-content-start place-items-start gap-[0.25rem]"
          )}
        >
          <p className={clsx("text-[0.875rem] font-medium text-white")}>
            {"ubermensch.pdf"}
          </p>
          <div
            className={clsx(
              "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.25rem]"
            )}
          >
            <div
              className={clsx(
                "w-[1.25rem] h-[1.25rem]",
                "bg-white",
                "rounded-[0.25rem]",
                "flex items-center justify-center",
                "text-[0.75rem] font-light text-[#404852]"
              )}
            >
              {"1"}
            </div>
            <p
              className={clsx("text-[0.75rem] font-light text-white")}
            >{`of 7 page`}</p>
          </div>
        </div>

        <div
          className={clsx(
            "grid grid-flow-col items-center content-center justify-center justify-items-center gap-[0.5rem]"
          )}
        >
          <button>
            <img
              src={"/icons/chat/zoom_out.svg"}
              className={clsx("w-[1.5rem] h-[1.5rem]")}
            />
          </button>
          <p className={clsx("text-[1rem] font-normal text-[#F4F8FC]")}>
            {"150%"}
          </p>
          <button>
            <img
              src={"/icons/chat/zoom_in.svg"}
              className={clsx("w-[1.5rem] h-[1.5rem]")}
            />
          </button>
        </div>

        <div
          className={clsx(
            "grid grid-flow-col items-center content-center justify-end justify-items-end gap-[0.5rem]",
            "w-full"
          )}
        >
          {/*  */}
          <button>
            <img
              src={"/icons/chat/split_page.svg"}
              className={clsx("w-[1.5rem] h-[1.5rem]")}
            />
          </button>
          <button>
            <img
              src={"/icons/chat/right_rotation.svg"}
              className={clsx("w-[1.5rem] h-[1.5rem]")}
            />
          </button>
          <button>
            <img
              src={"/icons/chat/left_rotation.svg"}
              className={clsx("w-[1.5rem] h-[1.5rem]")}
            />
          </button>
        </div>
      </div>

      {/* end header */}
    </div>
  );
};

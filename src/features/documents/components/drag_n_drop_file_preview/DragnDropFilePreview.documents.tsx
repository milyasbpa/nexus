"use client";
import * as React from "react";
import clsx from "clsx";

export interface DragnDropFilePreviewDocumentsProps {
  name?: string;
  actions?: string;
  onRemove?: () => void;
}

export const DragnDropFilePreviewDocuments = ({
  name = "",
  actions = "",
  onRemove,
}: DragnDropFilePreviewDocumentsProps) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-center place-items-center gap-y-[0.5rem]",
        "min-h-[184px]",
        "border-[#BFCAD7] border",
        "w-full",
        "rounded-[0.5rem]",
        "p-[1.75rem]"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-1 place-content-center place-items-center gap-y-[0.25rem]"
        )}
      >
        <img src={"/icons/documents/file_uploaded.svg"} />
        <p
          className={clsx(
            "text-[#404852]",
            "text-center text-[1rem] font-medium"
          )}
        >
          {name.length > 30 ? `${name.slice(0, 30)}...` : name}
        </p>

        <button
          className={clsx(
            "whitespace-pre-line text-center text-[0.75rem] font-normal text-[#FC5959] underline"
          )}
          onClick={onRemove}
        >
          {actions}
        </button>
      </div>
    </div>
  );
};

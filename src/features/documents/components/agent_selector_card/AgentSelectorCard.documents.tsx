import * as React from "react";
import clsx from "clsx";

export interface AgenSelectorCardDocumentProps {
  id?: string;
  image?: string;
  name?: string;
  description?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const AgentSelectorCardDocuments = ({
  id = "",
  image = "",
  name = "",
  description = "",
  onClick,
}: AgenSelectorCardDocumentProps) => {
  return (
    <button
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[0.5rem]",
        "w-full h-[240px]",
        "rounded-[0.25rem]",
        "border border-[#BFCAD7]"
      )}
      value={id}
      onClick={onClick}
    >
      <img src={image} className={clsx("w-[188px] h-[112px]")} />
      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[0.25rem]",
          "w-full"
        )}
      >
        <p className={clsx("text-[0.75rem] text-[#232931] font-medium")}>
          {name}
        </p>
        <p className={clsx("text-[0.75rem] text-[#404852] font-normal")}>
          {description}
        </p>
      </div>
    </button>
  );
};

import * as React from "react";
import clsx from "clsx";

export interface TableColumnHeaderDocumentsProps {
  id?: string;
  label?: string;
}

export const TableColumnHeaderDocuments = ({
  id = "",
  label = "",
}: TableColumnHeaderDocumentsProps) => {
  return (
    <div
      className={clsx(
        "w-full",
        "flex items-center justify-start",
        "px-[0.5rem] py-[0.625rem]",
        "bg-[#EBF0F8]"
      )}
    >
      <p
        className={clsx("text-[0.875rem] text-[#697584] font-medium text-left")}
      >
        {label}
      </p>
    </div>
  );
};

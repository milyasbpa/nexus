import * as React from "react";
import Link from "next/link";
import clsx from "clsx";
import { CellContext } from "@tanstack/react-table";

export interface TableCellDocumentsProps {
  id?: string;
  cellProps?: CellContext<
    {
      [key: string]:
        | string
        | {
            id: string;
            name: string;
          }[];
    },
    unknown
  >;
}

export const TableCellDocuments = ({
  id = "",
  cellProps,
}: TableCellDocumentsProps) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 items-center content-center justify-start justify-items-start",
        "w-full h-full",
        "px-[0.5rem] py-[0.5rem]"
      )}
    >
      <p
        className={clsx(
          "text-[0.875rem] text-[#5F5F5F] font-medium",
          "break-words"
        )}
      >
        {`${cellProps?.row.getValue(id) as string}`}
      </p>
    </div>
  );
};

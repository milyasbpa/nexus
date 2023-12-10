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
  if (id === "link") {
    return (
      <Link
        className={clsx(
          "flex items-center justify-center",
          "px-[1rem] py-[0.625rem]",
          "text-[1rem] font-bold text-white leading-[1.25rem]",
          "bg-[#005CFF]",
          "rounded-[0.5rem]",
          "w-fit"
        )}
        href={cellProps?.row.getValue(id) ?? ""}
      >
        {"See Detail"}
      </Link>
    );
  }
  if (id === "accounts") {
    return (
      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]"
        )}
      >
        {(
          cellProps?.row.getValue(id) as {
            id: string;
            name: string;
          }[]
        )?.map((account) => (
          <div
            key={account.id}
            className={clsx(
              "flex items-center justify-center",
              "px-[0.5rem] py-[0.25rem]",
              "text-[#005CFF] text-[0.875rem] font-medium",
              "bg-[#E8F0FF]",
              "rounded-[0.25rem]"
            )}
          >
            {account.name}
          </div>
        ))}
      </div>
    );
  }

  if (id === "recommendations") {
    return (
      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]"
        )}
      >
        {(
          cellProps?.row.getValue(id) as {
            id: string;
            name: string;
            description: string;
          }[]
        )?.map((item) => (
          <div
            key={item.id}
            className={clsx(
              "flex items-center justify-center",
              "px-[0.5rem] py-[0.25rem]",
              "text-[#005CFF] text-[0.875rem] font-medium",
              "bg-[#E8F0FF]",
              "rounded-[0.25rem]"
            )}
          >
            {item.name.length > 24 ? `${item.name.slice(0, 24)}...` : item.name}
          </div>
        ))}
      </div>
    );
  }
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
        {`${(cellProps?.row.getValue(id) as string).slice(0, 3)}... CORP`}
      </p>
    </div>
  );
};

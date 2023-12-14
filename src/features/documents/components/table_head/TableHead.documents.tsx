import { Table, flexRender } from "@tanstack/react-table";
import * as React from "react";
import clsx from "clsx";

export interface TableHeadDocumentsProps {
  table?: Table<any> | null;
}

export const TableHeadDocuments = ({
  table = null,
}: TableHeadDocumentsProps) => {
  return (
    <thead className={clsx("border border-[#BFCAD7]")}>
      {table !== null &&
        table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className={clsx("w-full")}>
            {headerGroup.headers.map((header) => {
              return (
                <th key={header.id} colSpan={header.colSpan}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              );
            })}
          </tr>
        ))}
    </thead>
  );
};

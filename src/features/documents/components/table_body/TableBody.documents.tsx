import { Table, flexRender } from "@tanstack/react-table";
import * as React from "react";
import clsx from "clsx";
export interface TableBodyDocumentsProps {
  table?: Table<any> | null;
  onSelectRow?: (e: React.MouseEvent<HTMLTableRowElement>) => void;
}

export const TableBodyDocuments: React.FC<TableBodyDocumentsProps> = ({
  table = null,
  onSelectRow,
}: TableBodyDocumentsProps) => {
  return (
    <tbody className={clsx("bg-[#ffffff]", "border border-[#BFCAD7]")}>
      {table !== null &&
        table.getRowModel().rows.map((row) => {
          return (
            <tr
              key={row.id}
              role={"table-row"}
              className={clsx("mb-[0.5rem]", "cursor-pointer")}
              id={row.id}
              onClick={onSelectRow}
            >
              {row.getVisibleCells().map((cell) => {
                return (
                  <td key={cell.id} className={clsx("py-[0.75rem]")}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          );
        })}
    </tbody>
  );
};

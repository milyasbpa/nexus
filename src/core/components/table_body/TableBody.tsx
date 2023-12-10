import { Table, flexRender } from "@tanstack/react-table";
import * as React from "react";
import clsx from "clsx";
export interface TableBodyProps {
  table?: Table<any> | null;
}

export const TableBody: React.FC<TableBodyProps> = ({
  table = null,
}: TableBodyProps) => {
  return (
    <tbody className={clsx("bg-[#ffffff]")}>
      {table !== null &&
        table.getRowModel().rows.map((row) => {
          return (
            <tr key={row.id} role={"table-row"} className={clsx("mb-[0.5rem]")}>
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

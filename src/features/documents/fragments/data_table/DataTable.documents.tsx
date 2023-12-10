"use client";
import * as React from "react";
import Image from "next/image";
import { TableBody } from "@/core/components/table_body";
import { TableHead } from "@/core/components/table_head";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";
// import Search from "@/core/components/search/Search.component";
import { useFormContext } from "react-hook-form";
// import { queryClient } from "@/core/utils/react_query/provider";
// import { AccountListReactQueryKey } from "../../react_query/keys";
import { getDictionaries } from "../../i18";
import { TableColumnHeaderDocuments } from "../../components/table_column_header";
import { TableCellDocuments } from "../../components/table_cell";

export const DataTableDocuments = () => {
  const { watch, setValue } = useFormContext();
  const dictionaries = getDictionaries("en");

  const columns = React.useMemo<
    ColumnDef<{ [key: string]: string | { id: string; name: string }[] }>[]
  >(() => {
    return dictionaries.data_table.head.data.map((item, index) => {
      return {
        accessorKey: item.id,
        header: () => (
          <TableColumnHeaderDocuments id={item.id} label={item.label} />
        ),
        cell: (cellProps: any) => (
          <TableCellDocuments id={item.id} cellProps={cellProps} />
        ),
      };
    });
  }, [dictionaries.data_table.head.data]);

  const table = useReactTable({
    data: [],
    columns: columns,
    state: {
      pagination: {
        pageIndex: 0,
        pageSize: 20,
      },
    },

    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),

    paginateExpandedRows: false,
    autoResetPageIndex: false,
    debugTable: true,
  });

  if (false) {
    return (
      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
          "w-full",
          "rounded-[0.25rem]",
          "overflow-hidden"
        )}
      >
        <table className={clsx("wide-spacing", "w-full")}>
          <TableHead table={table} />
        </table>
        <div
          className={clsx(
            "grid grid-cols-1 place-content-center place-items-center gap-[1rem]",
            "h-[400px] w-full",
            "bg-[white]"
          )}
        >
          <Image
            src={"/icons/documents/empty_file.svg"}
            alt={"empty-data"}
            width={60}
            height={60}
            className={clsx("w-[60px] h-[60px]")}
          />
          <p className={clsx("text-[#697584] text-[1rem] font-normal")}>
            {dictionaries.data_table.initial.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
        "w-full",
        "rounded-[0.25rem]",
        "overflow-hidden"
      )}
    >
      <table className={clsx("wide-spacing", "w-full")}>
        <TableHead table={table} />
        <TableBody table={table} />
      </table>
    </div>
  );
};

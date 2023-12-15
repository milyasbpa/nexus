"use client";
import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TableBodyDocuments } from "@/features/documents/components/table_body";
import { TableHeadDocuments } from "@/features/documents/components/table_head";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import { getDictionaries } from "../../i18";
import { TableColumnHeaderDocuments } from "../../components/table_column_header";
import { TableCellDocuments } from "../../components/table_cell";
import { useDocumentsGetDocumentListNexus } from "../../react_query/hooks/useGetDocumentListNexus.documents";
import { NexusWebURL } from "@/core/routers/web";

export const DataTableDocuments = () => {
  const { watch, setValue } = useFormContext();
  const router = useRouter();
  const dictionaries = getDictionaries("en");
  // useDocumentsGetDocumentListNexus();

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
    data: watch(dictionaries.data_table.name),
    columns: columns,
    state: {
      pagination: {
        pageIndex: 0,
        pageSize: 10,
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
          <TableHeadDocuments table={table} />
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

  const handleSelectRow = (e: React.MouseEvent<HTMLTableRowElement>) => {
    const docId = table
      .getRow(e.currentTarget.id)
      .getAllCells()
      .find((cell) => cell.column.id === "no")
      ?.renderValue() as string;
    router.push(NexusWebURL.getChatByDocumentId({ doc_id: docId }));
  };

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
        <TableHeadDocuments table={table} />
        <TableBodyDocuments table={table} onSelectRow={handleSelectRow} />
      </table>
    </div>
  );
};

"use client";
import * as React from "react";
import clsx from "clsx";
import { Textfield } from "@/core/components/textfield";
import { getDictionaries } from "../../i18";
import { useFormContext } from "react-hook-form";
import { DocumentsForm } from "../../react_hook_form/keys";
import { queryClient } from "@/core/config/react_query";
import { DocumentsReactQueryKey } from "../../react_query/keys";
import { GetDocumentListNexusSuccessResponseInterface } from "@/core/models/nexus";

export const SearchDocuments = () => {
  const dictionaries = getDictionaries("en");
  const { watch, setValue } = useFormContext<DocumentsForm>();

  const handleChangeSearchName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(dictionaries.data_table.search.input.name, e.currentTarget.value);
    const documents = queryClient.getQueryData(
      DocumentsReactQueryKey.GetDocumentListNexus()
    ) as undefined | GetDocumentListNexusSuccessResponseInterface;
    if (!documents) return;
    const filteredDocument = !e.currentTarget.value.length
      ? documents.data.docs_list
      : documents.data.docs_list.filter((document) =>
          document.file_name
            .toLowerCase()
            .includes(e.currentTarget.value.toLowerCase())
        );
    const tableData = filteredDocument.map((doc) => {
      const date = new Date(doc.created_at);
      const year = date.getUTCFullYear();
      const month = date.getUTCMonth() + 1;
      const day = date.getUTCDate();
      const dateString = year + "-" + month + "-" + day;
      return {
        no: doc.doc_id,
        file_name: doc.file_name,
        date: dateString,
      };
    });
    setValue(dictionaries.data_table.name, tableData);
  };
  return (
    <div className={clsx("w-full max-w-[250px]")}>
      <Textfield
        name={dictionaries.data_table.search.input.name}
        placeholder={dictionaries.data_table.search.input.placeholder}
        value={watch(dictionaries.data_table.search.input.name)}
        onChange={handleChangeSearchName}
      />
    </div>
  );
};

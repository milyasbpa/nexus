"use client";
import { useQuery } from "@tanstack/react-query";
import { DocumentsReactQueryKey } from "../keys";
import { getDictionaries } from "../../i18";
import { fetchGetDocumentListNexus } from "@/core/services/nexus";
import { GetDocumentListNexusSuccessResponseInterface } from "@/core/models/nexus";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { DocumentsForm } from "../../react_hook_form/keys";

export const useDocumentsGetDocumentListNexus = () => {
  const dictionaries = getDictionaries("en");
  const { setValue } = useFormContext<DocumentsForm>();
  const query = useQuery<
    GetDocumentListNexusSuccessResponseInterface | undefined,
    any
  >({
    queryKey: DocumentsReactQueryKey.GetDocumentListNexus(),
    queryFn: () => fetchGetDocumentListNexus(),
  });

  useEffect(() => {
    if (query.data && query.isSuccess) {
      const tableData = query.data.data.doc_list.map((doc) => {
        return {
          no: doc.doc_id,
          file_name: doc.file_name,
          date: "",
        };
      });
      setValue(dictionaries.data_table.name, tableData);
    }
  }, [query.data, query.isSuccess]);

  return query;
};

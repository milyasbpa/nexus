"use client";
import { useQuery } from "@tanstack/react-query";
import { DocumentsReactQueryKey } from "../keys";
import { getDictionaries } from "../../i18";
import { fetchGetDocumentListNexus } from "@/core/services/nexus";
import {
  GetDocumentListNexusRequestPayloadInterface,
  GetDocumentListNexusSuccessResponseInterface,
} from "@/core/models/nexus";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { DocumentsForm } from "../../react_hook_form/keys";
import { queryClient } from "@/core/config/react_query";
import { UserStorageInterface } from "@/core/models/storage";

export const useDocumentsGetDocumentListNexus = () => {
  const dictionaries = getDictionaries("en");
  const { setValue } = useFormContext<DocumentsForm>();

  const userStorageData = queryClient.getQueryData(
    DocumentsReactQueryKey.GetUserStorage()
  ) as undefined | UserStorageInterface;

  const query = useQuery<
    GetDocumentListNexusSuccessResponseInterface | undefined,
    any
  >({
    enabled: !!userStorageData,
    queryKey: DocumentsReactQueryKey.GetDocumentListNexus(),
    queryFn: () => {
      const payload: GetDocumentListNexusRequestPayloadInterface = {
        headers: {
          uid: userStorageData?.uid ?? "",
          ["access-token"]: userStorageData?.token ?? "",
        },
      };
      return fetchGetDocumentListNexus(payload);
    },
  });

  useEffect(() => {
    if (!!query.data && query.isSuccess) {
      const tableData = query.data.data.docs_list.map((doc) => {
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
    }
  }, [query.data, query.isSuccess]);

  return query;
};

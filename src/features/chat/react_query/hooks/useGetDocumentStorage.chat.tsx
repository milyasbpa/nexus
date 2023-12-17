"use client";
import { useQuery } from "@tanstack/react-query";
import { ChatReactQueryKey } from "../keys";
import { getDictionaries } from "../../i18";
import { getDocumentStorage } from "@/core/services/storage";
import { DocumentStorageInterface } from "@/core/models/storage";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { ChatForm } from "../../react_hook_form/keys";

export const useChatGetDocumentStorage = () => {
  const dictionaries = getDictionaries("en");
  const { setValue } = useFormContext<ChatForm>();

  const query = useQuery<DocumentStorageInterface | undefined, any>({
    queryKey: ChatReactQueryKey.GetDocumentStorage(),
    queryFn: () => {
      return getDocumentStorage();
    },
  });

  useEffect(() => {
    if (query.data) {
      setValue(dictionaries.pdf.header.name, {
        name: query.data.file_name,
        current_page: 1,
        total_page: 1,
      });
      const fileURL = query.data.file_url.replace(
        `${process.env.NEXT_PUBLIC_GCP_STORAGE_URL}`,
        `${process.env.NEXT_PUBLIC_WEB_URL}${process.env.NEXT_PUBLIC_GCP_STORAGE_PROXY_URL}`
      );
      setValue(dictionaries.pdf.file.name, fileURL);
      setValue(dictionaries.pdf.private.name, query.data.private);
    }
  }, [query.data]);

  return query;
};

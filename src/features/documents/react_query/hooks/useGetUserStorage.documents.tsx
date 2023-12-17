"use client";
import { useQuery } from "@tanstack/react-query";
import { DocumentsReactQueryKey } from "../keys";
import { getDictionaries } from "../../i18";
import { getUserStorage } from "@/core/services/storage";
import { UserStorageInterface } from "@/core/models/storage";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { DocumentsForm } from "../../react_hook_form/keys";

export const useDocumentsGetUserStorage = () => {
  const { setValue } = useFormContext<DocumentsForm>();
  const dictionaries = getDictionaries("en");

  const query = useQuery<UserStorageInterface | undefined, any>({
    queryKey: DocumentsReactQueryKey.GetUserStorage(),
    queryFn: () => {
      return getUserStorage();
    },
  });

  useEffect(() => {
    if (!!query.data) {
      setValue(
        dictionaries.upload.pesona_dialog.full_name.name,
        !query.data.full_name.length ? query.data.email : query.data.full_name
      );
    }
  }, [query.data]);

  return query;
};

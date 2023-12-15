"use client";
import { useQuery } from "@tanstack/react-query";
import { DocumentsReactQueryKey } from "../keys";
import { getDictionaries } from "../../i18";
import { getUserStorage } from "@/core/services/storage";
import { UserStorageInterface } from "@/core/models/storage";

export const useDocumentsGetUserStorage = () => {
  const dictionaries = getDictionaries("en");

  const query = useQuery<UserStorageInterface | undefined, any>({
    queryKey: DocumentsReactQueryKey.GetUserStorage(),
    queryFn: () => {
      return getUserStorage();
    },
  });

  return query;
};

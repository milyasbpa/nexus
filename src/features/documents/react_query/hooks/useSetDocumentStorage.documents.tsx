"use client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { DocumentsReactQueryKey } from "../keys";
import { DocumentStorageInterface } from "@/core/models/storage";
import { setDocumentStorage } from "@/core/services/storage";
import { useEffect } from "react";
import { NexusWebURL } from "@/core/routers/web";

export const useDocumentsSetDocumentStorage = () => {
  const router = useRouter();

  const mutation = useMutation<
    DocumentStorageInterface | undefined,
    any,
    DocumentStorageInterface
  >({
    mutationKey: DocumentsReactQueryKey.SetDocumentStorage(),
    mutationFn: (payload: DocumentStorageInterface) => {
      return setDocumentStorage(payload);
    },
  });

  useEffect(() => {
    if (mutation.data) {
      router.push(
        NexusWebURL.getChatByDocumentId({ doc_id: mutation.data.doc_id })
      );
    }
  }, [mutation.data]);

  return mutation;
};

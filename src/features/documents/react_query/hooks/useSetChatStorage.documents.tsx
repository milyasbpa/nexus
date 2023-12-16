"use client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { DocumentsReactQueryKey } from "../keys";
import { ChatStorageInterface } from "@/core/models/storage";
import { setChatStorage } from "@/core/services/storage";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { DocumentsForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";
import { useDocumentsPostDocumentUploadNexus } from "./usePostDocumentUploadNexus.documents";
import { useDocumentsGetFileWeb } from "./useGetFileWeb.documents";

export const useDocumentsSetChatStorage = () => {
  const router = useRouter();
  const { watch } = useFormContext<DocumentsForm>();
  const dictionaries = getDictionaries("en");

  const { mutate: getFileWeb } = useDocumentsGetFileWeb();
  const { mutate: postDocumentUploadNexus } =
    useDocumentsPostDocumentUploadNexus();

  const mutation = useMutation<ChatStorageInterface | undefined, any>({
    mutationKey: DocumentsReactQueryKey.SetDocumentStorage(),
    mutationFn: () => {
      const payload: ChatStorageInterface = {
        persona: {
          id: watch(dictionaries.upload.pesona_dialog.input.name),
          name:
            dictionaries.upload.pesona_dialog.data.find(
              (item) =>
                item.id === watch(dictionaries.upload.pesona_dialog.input.name)
            )?.name ?? "",
        },
      };
      return setChatStorage(payload);
    },
  });

  useEffect(() => {
    if (mutation.data) {
      if (watch(dictionaries.upload.dialog.tab.name) === "url") {
        getFileWeb();
      } else {
        postDocumentUploadNexus();
      }
    }
  }, [mutation.data]);

  return mutation;
};

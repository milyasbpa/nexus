"use client";
import { useMutation } from "@tanstack/react-query";
import { DocumentsReactQueryKey } from "../keys";
import { getDictionaries } from "../../i18";
import {
  PostDocumentUploadNexusRequestPayloadInterface,
  PostDocumentUploadNexusSuccessResponseInterface,
} from "@/core/models/nexus";
import { useFormContext } from "react-hook-form";
import { DocumentsForm } from "../../react_hook_form/keys";
import { fetchPostDocumentUploadNexus } from "@/core/services/nexus/document_upload.post";
import { queryClient } from "@/core/config/react_query";
import { UserStorageInterface } from "@/core/models/storage";

export const useDocumentsPostDocumentUploadNexus = () => {
  const dictionaries = getDictionaries("en");
  const { watch, setValue } = useFormContext<DocumentsForm>();
  const userStorageData = queryClient.getQueryData(
    DocumentsReactQueryKey.GetUserStorage()
  ) as undefined | UserStorageInterface;

  const mutation = useMutation<
    PostDocumentUploadNexusSuccessResponseInterface | undefined,
    any
  >({
    mutationKey: DocumentsReactQueryKey.PostDocumentUploadNexus(),
    mutationFn: () => {
      const formData = new FormData();
      if (watch(dictionaries.upload.dialog.tab.name) === "url") {
        if (!watch(dictionaries.upload.dialog.url.file.name)) {
          formData.append(
            "file",
            watch(dictionaries.upload.dialog.url.file.name)
          );
        }
        formData.append(
          "private",
          watch(
            dictionaries.upload.dialog.url.setting.input.private_document.name
          )
        );
      } else {
        if (!watch(dictionaries.upload.dialog.browse.input.name)) {
          formData.append(
            "file",
            watch(dictionaries.upload.dialog.browse.input.name)
          );
        }
        formData.append(
          "private",
          watch(
            dictionaries.upload.dialog.browse.setting.input.private_document
              .name
          )
        );
      }

      const payload: PostDocumentUploadNexusRequestPayloadInterface = {
        headers: {
          uid: userStorageData?.uid ?? "",
          ["access-token"]: userStorageData?.token ?? "",
        },
        data: formData,
      };
      return fetchPostDocumentUploadNexus(payload);
    },
  });

  return mutation;
};

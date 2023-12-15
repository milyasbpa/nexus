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

export const useDocumentsPostDocumentUploadNexus = () => {
  const dictionaries = getDictionaries("en");
  const { watch, setValue } = useFormContext<DocumentsForm>();
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
        data: formData,
      };
      return fetchPostDocumentUploadNexus();
    },
  });

  return mutation;
};

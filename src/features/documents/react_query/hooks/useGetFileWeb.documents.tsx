"use client";
import { useMutation } from "@tanstack/react-query";
import { DocumentsReactQueryKey } from "../keys";
import { getDictionaries } from "../../i18";
import { useFormContext } from "react-hook-form";
import { DocumentsForm } from "../../react_hook_form/keys";
import { fetchGetFileWeb } from "@/core/services/web";
import {
  GetFileWebRequestPayloadInterface,
  GetFileWebSuccessResponseInterface,
} from "@/core/models/web";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { useDocumentsPostDocumentUploadNexus } from "./usePostDocumentUploadNexus.documents";

export const useDocumentsGetFileWeb = () => {
  const dictionaries = getDictionaries("en");
  const { watch, setValue } = useFormContext<DocumentsForm>();

  const { mutate: postDocumentUploadNexus } =
    useDocumentsPostDocumentUploadNexus();
  const mutation = useMutation<
    GetFileWebSuccessResponseInterface | undefined,
    any
  >({
    mutationKey: DocumentsReactQueryKey.GetFileWeb(),
    mutationFn: () => {
      const payload: GetFileWebRequestPayloadInterface = {
        params: {
          doc_url: watch(dictionaries.upload.dialog.url.input.name),
        },
      };
      return fetchGetFileWeb(payload);
    },
  });

  useEffect(() => {
    if (mutation.data) {
      const file = new File([mutation.data], `${uuidv4()}.pdf`, {
        type: mutation.data.type,
        lastModified: Date.now(),
      });
      setValue(dictionaries.upload.dialog.url.file.name, [file]);
      postDocumentUploadNexus();
    }
  }, [mutation.data]);

  return mutation;
};

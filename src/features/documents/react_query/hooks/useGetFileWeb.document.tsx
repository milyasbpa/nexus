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

export const useDocumentsGetFileWeb = () => {
  const dictionaries = getDictionaries("en");
  const { watch, setValue } = useFormContext<DocumentsForm>();
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

  return mutation;
};

"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { DocumentsReactQueryKey } from "../keys";
import { getDictionaries } from "../../i18";
import { PostDocumentUploadNexusSuccessResponseInterface } from "@/core/models/nexus";
import { useFormContext } from "react-hook-form";
import { DocumentsForm } from "../../react_hook_form/keys";
import { fetchPostDocumentUploadNexus } from "@/core/services/nexus/document_upload.post";

export const useDocumentsPostDocumentUploadNexus = () => {
  const dictionaries = getDictionaries("en");
  const { setValue } = useFormContext<DocumentsForm>();
  const mutation = useMutation<
    PostDocumentUploadNexusSuccessResponseInterface | undefined,
    any
  >({
    mutationKey: DocumentsReactQueryKey.PostDocumentUploadNexus(),
    mutationFn: () => {
      return fetchPostDocumentUploadNexus();
    },
  });

  return mutation;
};

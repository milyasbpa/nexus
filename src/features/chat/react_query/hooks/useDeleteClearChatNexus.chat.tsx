"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ChatReactQueryKey } from "../keys";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { ChatForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";
import { fetchDeleteClearChatNexus } from "@/core/services/nexus";
import {
  DeleteClearChatNexusRequestPayloadInterface,
  DeleteClearChatNexusSuccessResponseInterface,
} from "@/core/models/nexus";
import { useParams } from "next/navigation";
import { queryClient } from "@/core/config/react_query";
import { UserStorageInterface } from "@/core/models/storage";

export const useChatDeleteClearChatNexus = () => {
  const { setValue } = useFormContext<ChatForm>();
  const dictionaries = getDictionaries("en");
  const params = useParams();
  const userStorageData = queryClient.getQueryData(
    ChatReactQueryKey.GetUserStorage()
  ) as undefined | UserStorageInterface;

  const mutation = useMutation<
    DeleteClearChatNexusSuccessResponseInterface | undefined,
    any
  >({
    mutationKey: ChatReactQueryKey.DeleteClearChatNexus(),
    mutationFn: () => {
      const payload: DeleteClearChatNexusRequestPayloadInterface = {
        url: {
          doc_id: String(params?.id) ?? "",
        },
        headers: {
          uid: userStorageData?.uid ?? "",
          ["access-token"]: userStorageData?.token ?? "",
        },
      };
      return fetchDeleteClearChatNexus(payload);
    },
  });

  return mutation;
};

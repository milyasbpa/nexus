"use client";
import { useMutation } from "@tanstack/react-query";
import { ChatReactQueryKey } from "../keys";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { ChatForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";
import { fetchDeleteClearChatNexus } from "@/core/services/nexus";
import {
  DeleteClearChatNexusErrorResponseInterface,
  DeleteClearChatNexusRequestPayloadInterface,
  DeleteClearChatNexusSuccessResponseInterface,
} from "@/core/models/nexus";
import { useParams } from "next/navigation";
import { queryClient } from "@/core/config/react_query";
import { UserStorageInterface } from "@/core/models/storage";
import { NexusWebURL } from "@/core/routers/web";

export const useChatDeleteClearChatNexus = () => {
  const router = useRouter();
  const { setValue } = useFormContext<ChatForm>();
  const dictionaries = getDictionaries("en");
  const params = useParams();
  const userStorageData = queryClient.getQueryData(
    ChatReactQueryKey.GetUserStorage()
  ) as undefined | UserStorageInterface;

  const mutation = useMutation<
    DeleteClearChatNexusSuccessResponseInterface | undefined,
    DeleteClearChatNexusErrorResponseInterface
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

  useEffect(() => {
    if (mutation.isSuccess || mutation.data) {
      queryClient.invalidateQueries({
        queryKey: ChatReactQueryKey.GetChatHistoryNexus(),
      });
    }
  }, [mutation.isSuccess, mutation.data]);

  useEffect(() => {
    if (mutation.isError || mutation.error) {
      if (mutation.error.status === 401) {
        router.push(NexusWebURL.getLogin());
      }
    }
  }, [mutation.isError, mutation.error]);

  return mutation;
};

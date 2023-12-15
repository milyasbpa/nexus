"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ChatReactQueryKey } from "../keys";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { ChatForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";
import { fetchPostSendChatNexus } from "@/core/services/nexus";
import {
  PostSendChatNexusRequestPayloadInterface,
  PostSendChatNexusSuccessResponseInterface,
} from "@/core/models/nexus";
import { useParams } from "next/navigation";
import { queryClient } from "@/core/config/react_query";
import { UserStorageInterface } from "@/core/models/storage";

export const useChatPostSendChatNexus = () => {
  const { setValue } = useFormContext<ChatForm>();
  const dictionaries = getDictionaries("en");
  const params = useParams();
  const userStorageData = queryClient.getQueryData(
    ChatReactQueryKey.GetUserStorage()
  ) as undefined | UserStorageInterface;

  const mutation = useMutation<
    PostSendChatNexusSuccessResponseInterface | undefined,
    any
  >({
    mutationKey: ChatReactQueryKey.PostSendChatNexus(),
    mutationFn: () => {
      const payload: PostSendChatNexusRequestPayloadInterface = {
        url: {
          doc_id: String(params?.id) ?? "",
        },
        data: {
          message: "",
          persona: "GENERAL",
        },
        headers: {
          uid: userStorageData?.uid ?? "",
          ["access-token"]: userStorageData?.token ?? "",
        },
      };
      return fetchPostSendChatNexus(payload);
    },
  });

  return mutation;
};

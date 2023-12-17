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
  const { watch, setValue } = useFormContext<ChatForm>();
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
          message: watch(dictionaries.conversation.question.name),
          persona:
            watch(dictionaries.conversation.persona.name)?.id ?? "GENERAL",
        },
        headers: {
          uid: userStorageData?.uid ?? "",
          ["access-token"]: userStorageData?.token ?? "",
        },
      };
      return fetchPostSendChatNexus(payload);
    },
  });

  useEffect(() => {
    if (mutation.data) {
      const persona =
        mutation.data.data.persona === "FINANCIAL_CONSULTANT"
          ? "Financial Analyst"
          : mutation.data.data.persona === "LEGAL_CONSULTANT"
          ? "Legal Consultant"
          : mutation.data.data.persona === "GENERAL"
          ? "General"
          : "User";
      const initial = persona.split(" ").reduce((acc: any, value: string) => {
        const firstChar = value.charAt(0);
        return `${acc}${firstChar}`;
      }, "");
      setValue(dictionaries.conversation.history.name, [
        ...watch(dictionaries.conversation.history.name),
        {
          message: mutation.data.data.message,
          initial: initial,
          user: persona,
        },
      ]);
    }
  }, [mutation.data]);

  useEffect(() => {
    if (mutation.isError || mutation.error) {
      setValue(dictionaries.conversation.history.name, [
        ...watch(dictionaries.conversation.history.name),
        {
          message:
            dictionaries.conversation.history.greeting.template.error.message,
          initial:
            dictionaries.conversation.history.greeting.template.error.initial,
          user: dictionaries.conversation.history.greeting.template.error.user,
        },
      ]);
    }
  }, [mutation.isError, mutation.error]);

  return mutation;
};

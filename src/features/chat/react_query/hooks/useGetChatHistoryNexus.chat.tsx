"use client";
import { useQuery } from "@tanstack/react-query";
import { ChatReactQueryKey } from "../keys";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { ChatForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";
import { fetchGetChatHistoryNexus } from "@/core/services/nexus";
import {
  GetChatHistoryNexusRequestPayloadInterface,
  GetChatHistoryNexusSuccessResponseInterface,
} from "@/core/models/nexus";
import { useParams } from "next/navigation";
import { queryClient } from "@/core/config/react_query";
import { UserStorageInterface } from "@/core/models/storage";

export const useChatGetChatHistoryNexus = () => {
  const { watch, setValue } = useFormContext<ChatForm>();
  const dictionaries = getDictionaries("en");
  const params = useParams();
  const userStorageData = queryClient.getQueryData(
    ChatReactQueryKey.GetUserStorage()
  ) as undefined | UserStorageInterface;

  const query = useQuery<
    GetChatHistoryNexusSuccessResponseInterface | undefined,
    any
  >({
    enabled: !!userStorageData,
    queryKey: ChatReactQueryKey.GetChatHistoryNexus(),
    queryFn: () => {
      const payload: GetChatHistoryNexusRequestPayloadInterface = {
        url: {
          doc_id: String(params?.id) ?? "",
        },
        headers: {
          uid: userStorageData?.uid ?? "",
          ["access-token"]: userStorageData?.token ?? "",
        },
      };
      console.log(payload, "ini payload");
      return fetchGetChatHistoryNexus(payload);
    },
  });

  useEffect(() => {
    if (query.data) {
      setValue(
        dictionaries.conversation.history.name,
        !query.data.data.chats.length
          ? [...watch(dictionaries.conversation.history.name)]
          : [
              ...query.data.data.chats
                .sort((a, b) => a.created_at - b.created_at)
                .map((chat) => {
                  const persona = chat.persona ?? "USER";
                  const initial = persona
                    .split(" ")
                    .reduce((acc: any, value: string) => {
                      const firstChar = value.charAt(0);
                      return `${acc}${firstChar}`;
                    }, "");
                  return {
                    message: chat.message,
                    initial: initial,
                    user: persona,
                  };
                }),
              ...watch(dictionaries.conversation.history.name),
            ]
      );
    }
  }, [query.data]);

  return query;
};

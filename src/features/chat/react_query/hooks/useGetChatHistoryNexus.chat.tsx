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

export const useChatGetChatSuggestionNexus = () => {
  const { watch, setValue } = useFormContext<ChatForm>();
  const dictionaries = getDictionaries("en");
  const params = useParams();

  const query = useQuery<
    GetChatHistoryNexusSuccessResponseInterface | undefined,
    any
  >({
    queryKey: ChatReactQueryKey.GetChatSuggestionNexus(),
    queryFn: () => {
      const payload: GetChatHistoryNexusRequestPayloadInterface = {
        url: {
          doc_id: String(params?.id) ?? "",
        },
      };
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
              query.data.data.chats.map((chat) => {
                const initial = chat.persona
                  .split(" ")
                  .reduce((acc: any, value: string) => {
                    const firstChar = value.charAt(0);
                    return `${acc}${firstChar}`;
                  }, "");
                return {
                  message: chat.message,
                  initial: initial,
                  user: chat.persona,
                };
              }),
              ...watch(dictionaries.conversation.history.name),
            ]
      );
    }
  }, [query.data]);

  return query;
};

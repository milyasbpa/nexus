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
import {
  ChatStorageInterface,
  UserStorageInterface,
} from "@/core/models/storage";

export const useChatGetChatHistoryNexus = () => {
  const { watch, setValue } = useFormContext<ChatForm>();
  const dictionaries = getDictionaries("en");
  const params = useParams();
  const userStorageData = queryClient.getQueryData(
    ChatReactQueryKey.GetUserStorage()
  ) as undefined | UserStorageInterface;

  const chatStorageData = queryClient.getQueryData(
    ChatReactQueryKey.GetChatStorage()
  ) as undefined | ChatStorageInterface;

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

      return fetchGetChatHistoryNexus(payload);
    },
  });

  useEffect(() => {
    if (query.data) {
      const lastPersona = !query.data.data.chats.length
        ? chatStorageData?.persona ?? {
            id: "GENERAL",
            name: "General",
          }
        : !!query.data.data.chats.filter((chat) => !!chat.persona).at(-1)?.id
        ? {
            id:
              query.data.data.chats.filter((chat) => !!chat.persona).at(-1)
                ?.persona ?? "GENERAL",
            name:
              query.data.data.chats.filter((chat) => !!chat.persona).at(-1)
                ?.persona === "FINANCIAL_CONSULTANT"
                ? "Financial Analyst"
                : query.data.data.chats.filter((chat) => !!chat.persona).at(-1)
                    ?.persona === "LEGAL_CONSULTANT"
                ? "Legal Consultant"
                : "General",
          }
        : {
            id: "GENERAL",
            name: "General",
          };
      setValue(
        dictionaries.conversation.history.name,
        !query.data.data.chats.length
          ? [
              {
                ...dictionaries.conversation.history.greeting.template,
                message:
                  dictionaries.conversation.history.greeting.template.message.replace(
                    "{{name}}",
                    userStorageData?.email ?? ""
                  ),
                user: lastPersona.name,
                initial: lastPersona.name
                  .split(" ")
                  .reduce((acc: any, value: string) => {
                    const firstChar = value.charAt(0);
                    return `${acc}${firstChar}`;
                  }, ""),
              },
            ]
          : [
              ...query.data.data.chats
                .sort((a, b) => a.created_at - b.created_at)
                .map((chat) => {
                  const persona =
                    chat.persona === "FINANCIAL_CONSULTANT"
                      ? "Financial Analyst"
                      : chat.persona === "LEGAL_CONSULTANT"
                      ? "Legal Consultant"
                      : chat.persona === "GENERAL"
                      ? "General"
                      : "USER";
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
              {
                ...dictionaries.conversation.history.greeting.template,
                message:
                  dictionaries.conversation.history.greeting.template.message.replace(
                    "{{name}}",
                    userStorageData?.email ?? ""
                  ),
                user: lastPersona.name,
                initial: lastPersona.name
                  .split(" ")
                  .reduce((acc: any, value: string) => {
                    const firstChar = value.charAt(0);
                    return `${acc}${firstChar}`;
                  }, ""),
              },
            ]
      );

      setValue(dictionaries.conversation.persona.name, lastPersona);
    }
  }, [query.data]);

  return query;
};

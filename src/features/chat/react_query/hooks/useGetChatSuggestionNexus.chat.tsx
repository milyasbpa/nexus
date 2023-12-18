"use client";
import { useQuery } from "@tanstack/react-query";
import { ChatReactQueryKey } from "../keys";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import { ChatForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";
import { fetchGetChatSuggestionNexus } from "@/core/services/nexus";
import {
  GetChatSuggestionNexusErrorResponseInterface,
  GetChatSuggestionNexusRequestPayloadInterface,
  GetChatSuggestionNexusSuccessResponseInterface,
} from "@/core/models/nexus";
import { queryClient } from "@/core/config/react_query";
import { UserStorageInterface } from "@/core/models/storage";
import { NexusWebURL } from "@/core/routers/web";

export const useChatGetChatSuggestionNexus = () => {
  const router = useRouter();
  const { watch, setValue } = useFormContext<ChatForm>();
  const dictionaries = getDictionaries("en");
  const userStorageData = queryClient.getQueryData(
    ChatReactQueryKey.GetUserStorage()
  ) as undefined | UserStorageInterface;

  const historyData = queryClient.getQueryData(
    ChatReactQueryKey.GetChatHistoryNexus()
  );

  const payload: GetChatSuggestionNexusRequestPayloadInterface = useMemo(() => {
    return {
      params: {
        persona: watch(dictionaries.conversation.persona.name)?.id ?? "GENERAL",
      },
      headers: {
        uid: userStorageData?.uid ?? "",
        ["access-token"]: userStorageData?.token ?? "",
      },
    };
  }, [
    watch(dictionaries.conversation.persona.name)?.id,
    userStorageData?.uid,
    userStorageData?.token,
  ]);

  const query = useQuery<
    GetChatSuggestionNexusSuccessResponseInterface | undefined,
    GetChatSuggestionNexusErrorResponseInterface
  >({
    enabled: !!userStorageData && !!historyData,
    queryKey: ChatReactQueryKey.GetChatSuggestionNexus(payload),
    queryFn: () => {
      return fetchGetChatSuggestionNexus(payload);
    },
  });

  useEffect(() => {
    if (!!query.data) {
      const categories = query.data.data.suggestions
        .map((item) => item.category)
        .filter((value, index, array) => array.indexOf(value) === index);

      setValue(
        dictionaries.conversation.suggestion.message.name,
        categories.map((category) => {
          return {
            category: category,
            data:
              query.data?.data.suggestions
                .filter((suggestion) => suggestion.category === category)
                .map((suggestion) => {
                  return {
                    message: suggestion.message,
                  };
                }) ?? [],
          };
        })
      );
    }
  }, [query.data]);

  useEffect(() => {
    if (query.isError || query.error) {
      if (query.error.status === 401) {
        router.push(NexusWebURL.getLogin());
      }
    }
  }, [query.isError, query.error]);

  return query;
};

"use client";
import { useQuery } from "@tanstack/react-query";
import { ChatReactQueryKey } from "../keys";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { ChatForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";
import { fetchGetChatSuggestionNexus } from "@/core/services/nexus";
import {
  GetChatSuggestionNexusRequestPayloadInterface,
  GetChatSuggestionNexusSuccessResponseInterface,
} from "@/core/models/nexus";
import { queryClient } from "@/core/config/react_query";
import { UserStorageInterface } from "@/core/models/storage";

export const useChatGetChatSuggestionNexus = () => {
  const { setValue } = useFormContext<ChatForm>();
  const dictionaries = getDictionaries("en");
  const userStorageData = queryClient.getQueryData(
    ChatReactQueryKey.GetUserStorage()
  ) as undefined | UserStorageInterface;
  console.log(!!userStorageData, "ini storage data");

  const query = useQuery<
    GetChatSuggestionNexusSuccessResponseInterface | undefined,
    any
  >({
    enabled: !!userStorageData,
    queryKey: ChatReactQueryKey.GetChatSuggestionNexus(),
    queryFn: () => {
      const payload: GetChatSuggestionNexusRequestPayloadInterface = {
        params: {
          persona: "GENERAL",
        },
        headers: {
          uid: userStorageData?.uid ?? "",
          ["access-token"]: userStorageData?.token ?? "",
        },
      };
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

  return query;
};

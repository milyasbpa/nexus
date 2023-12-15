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

export const useChatGetChatSuggestionNexus = () => {
  const { setValue } = useFormContext<ChatForm>();
  const dictionaries = getDictionaries("en");
  const query = useQuery<
    GetChatSuggestionNexusSuccessResponseInterface | undefined,
    any
  >({
    queryKey: ChatReactQueryKey.GetChatSuggestionNexus(),
    queryFn: () => {
      const payload: GetChatSuggestionNexusRequestPayloadInterface = {
        params: {
          persona: "GENERAL",
        },
      };
      return fetchGetChatSuggestionNexus(payload);
    },
  });

  return query;
};

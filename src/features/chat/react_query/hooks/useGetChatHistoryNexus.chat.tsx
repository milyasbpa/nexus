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
  const { setValue } = useFormContext<ChatForm>();
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

  return query;
};

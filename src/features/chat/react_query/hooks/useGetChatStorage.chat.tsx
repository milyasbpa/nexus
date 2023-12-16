"use client";
import { useQuery } from "@tanstack/react-query";
import { ChatReactQueryKey } from "../keys";
import { getDictionaries } from "../../i18";
import { getChatStorage } from "@/core/services/storage";
import { ChatStorageInterface } from "@/core/models/storage";

export const useChatGetChatStorage = () => {
  const dictionaries = getDictionaries("en");

  const query = useQuery<ChatStorageInterface | undefined, any>({
    queryKey: ChatReactQueryKey.GetChatStorage(),
    queryFn: () => {
      return getChatStorage();
    },
  });

  return query;
};

"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ChatReactQueryKey } from "../keys";
import { getDictionaries } from "../../i18";
import { setChatStorage } from "@/core/services/storage";
import { ChatStorageInterface } from "@/core/models/storage";
import { useFormContext } from "react-hook-form";
import { ChatForm } from "../../react_hook_form/keys";

export const useChatSetChatStorage = () => {
  const dictionaries = getDictionaries("en");
  const { watch } = useFormContext<ChatForm>();

  const mutation = useMutation<ChatStorageInterface | undefined, any>({
    mutationKey: ChatReactQueryKey.SetChatStorage(),
    mutationFn: () => {
      const payload: ChatStorageInterface = {
        persona: {
          id: watch(dictionaries.conversation.persona.name).id,
          name: watch(dictionaries.conversation.persona.name).name,
        },
      };
      return setChatStorage(payload);
    },
  });

  return mutation;
};

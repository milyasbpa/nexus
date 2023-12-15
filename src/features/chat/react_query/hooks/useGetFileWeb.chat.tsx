"use client";
import { useQuery } from "@tanstack/react-query";
import { ChatReactQueryKey } from "../keys";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { ChatForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";
import {
  GetFileWebRequestPayloadInterface,
  GetFileWebSuccessResponseInterface,
} from "@/core/models/web";
import { fetchGetFileWeb } from "@/core/services/web";
import { v4 as uuidv4 } from "uuid";

export const useChatGetFileWeb = () => {
  const { setValue } = useFormContext<ChatForm>();
  const dictionaries = getDictionaries("en");
  const query = useQuery<GetFileWebSuccessResponseInterface | undefined, any>({
    queryKey: ChatReactQueryKey.GetChatSuggestionNexus(),
    queryFn: () => {
      const payload: GetFileWebRequestPayloadInterface = {
        params: {
          doc_url: "https://www.africau.edu/images/default/sample.pdf",
        },
      };
      return fetchGetFileWeb(payload);
    },
  });

  useEffect(() => {
    if (query.data) {
      console.log(
        query.data,
        new File([query.data], uuidv4(), {
          type: query.data.type,
          lastModified: Date.now(),
        }).name,
        "ini name"
      );
      const file = new File([query.data], uuidv4(), {
        type: query.data.type,
        lastModified: Date.now(),
      });
      setValue(dictionaries.pdf.header.name, {
        name: file.name,
        current_page: 1,
        total_page: 1,
      });
    }
  }, [query.data]);

  return query;
};

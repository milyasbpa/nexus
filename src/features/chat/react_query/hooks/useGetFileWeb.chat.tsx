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
      const file = new File([query.data], `${uuidv4()}.pdf`, {
        type: query.data.type,
        lastModified: Date.now(),
      });
      const url = URL.createObjectURL(file);

      setValue(dictionaries.pdf.header.name, {
        name: file.name,
        current_page: 1,
        total_page: 1,
      });
      setValue(dictionaries.pdf.file.name, url);
    }
  }, [query.data]);

  return query;
};

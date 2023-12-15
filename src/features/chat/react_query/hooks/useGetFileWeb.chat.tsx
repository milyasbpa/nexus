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
    queryKey: ChatReactQueryKey.GetFileWeb(),
    queryFn: () => {
      const payload: GetFileWebRequestPayloadInterface = {
        params: {
          doc_url:
            "https://storage.googleapis.com/fintelite-fb598.appspot.com/docs/upload_06069ee7a36ffa7af40a1c3067295093.pdf?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=firebase-adminsdk-fpe3g%40fintelite-fb598.iam.gserviceaccount.com%2F20231215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231215T095821Z&X-Goog-Expires=525600&X-Goog-SignedHeaders=host&X-Goog-Signature=85f163f32b10119f9875d47160ff67ff79991836c0da7534090d40cf848934b257c835e480236d2d03be9bf2fd9fdc2b883974f5e8dc04b065124ebbbbeea6961f2f983948be9b4ca534315a2d0c58e85a7bb0a9488c7eb22683832e02b33756faa5127d90a211bdf926c750068ac69bced6664057e85834647ba4f18376355ebb8a1fdfc988f42fea665d796a46690db5e9201fc140fd76de801f0a0b0aa0e3f10d6a61ac51d54f79c0d5c82ce55a07e52def06032d41b33e060d7c8c1ac07cebef39755ead31a36a04cbd653d52da59b420fda8e73d8a0fcf07fe060f6407cebecfb141a9ed818785646394ec15925e9f246ed866f679855422c5da033243b",
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

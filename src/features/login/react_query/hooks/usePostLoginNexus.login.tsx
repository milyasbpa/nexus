"use client";
import { useMutation } from "@tanstack/react-query";
import { LoginReactQueryKey } from "../keys";
import { fetchPostLoginNexus } from "@/core/services/nexus";
import {
  PostLoginNexusErrorResponseInterface,
  PostLoginNexusRequestPayloadInterface,
  PostLoginNexusSuccessResponseInterface,
} from "@/core/models/nexus";
import { useLoginSetUserStorage } from "./useSetUserStorage.login";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { LoginForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";

export const useLoginPostLoginNexus = () => {
  const { watch, setValue } = useFormContext<LoginForm>();
  const dictionaries = getDictionaries("en");
  const { mutate: setUserStorage } = useLoginSetUserStorage();
  const mutation = useMutation<
    PostLoginNexusSuccessResponseInterface,
    PostLoginNexusErrorResponseInterface
  >({
    mutationKey: LoginReactQueryKey.PostLoginNexus(),
    mutationFn: () => {
      const payload: PostLoginNexusRequestPayloadInterface = {
        data: {
          id_token: watch(dictionaries.form.token.name),
        },
      };
      return fetchPostLoginNexus(payload);
    },
  });

  useEffect(() => {
    if (mutation.data) {
      setValue(dictionaries.form.uid.name, mutation.data.data.uid);
      setUserStorage();
    }
  }, [mutation.data]);

  return mutation;
};

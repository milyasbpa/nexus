"use client";
import { useMutation } from "@tanstack/react-query";
import { RegistrationReactQueryKey } from "../keys";
import { fetchPostLoginNexus } from "@/core/services/nexus";
import {
  PostLoginNexusErrorResponseInterface,
  PostLoginNexusRequestPayloadInterface,
  PostLoginNexusSuccessResponseInterface,
} from "@/core/models/nexus";
import { useLoginSetUserStorage } from "./useSetUserStorage.registration";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { RegistrationForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";

export const useRegistrationPostLoginNexus = () => {
  const { watch, setValue } = useFormContext<RegistrationForm>();
  const dictionaries = getDictionaries("en");
  const { mutate: setUserStorage } = useLoginSetUserStorage();
  const mutation = useMutation<
    PostLoginNexusSuccessResponseInterface,
    PostLoginNexusErrorResponseInterface
  >({
    mutationKey: RegistrationReactQueryKey.PostLoginNexus(),
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

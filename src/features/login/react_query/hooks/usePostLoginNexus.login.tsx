"use client";
import { useMutation } from "@tanstack/react-query";
import { LoginReactQueryKey } from "../keys";
import { fetchPostLoginNexus } from "@/core/services/nexus";
import {
  PostLoginNexusErrorResponseInterface,
  PostLoginNexusRequestBodyInterface,
  PostLoginNexusSuccessResponseInterface,
} from "@/core/models/nexus";
import { useLoginSetUserStorage } from "./useSetUserStorage.login";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { LoginForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";

export const useLoginPostLoginNexus = () => {
  const {setValue} = useFormContext<LoginForm>();
  const dictionaries = getDictionaries('en')
  const { mutate: setUserStorage } = useLoginSetUserStorage();
  const mutation = useMutation<
    PostLoginNexusSuccessResponseInterface,
    PostLoginNexusErrorResponseInterface,
    PostLoginNexusRequestBodyInterface
  >({
    mutationKey: LoginReactQueryKey.PostLoginNexus(),
    mutationFn: (payload: PostLoginNexusRequestBodyInterface) =>
      fetchPostLoginNexus(payload),
  });

  useEffect(() => {
    if (mutation.data) {
      setValue(dictionaries.form.uid.name,mutation.data.data.uid);
      setUserStorage();
    }
  }, [mutation.data]);

  return mutation;
};

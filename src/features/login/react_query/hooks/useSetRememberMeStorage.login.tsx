"use client";
import { useMutation } from "@tanstack/react-query";
import { LoginReactQueryKey } from "../keys";
import { setRememberMeStorage } from "@/core/services/storage";
import { RememberMeStorageInterface } from "@/core/models/storage/remember_me";
import { useLoginSignInWithEmailAndPasswordFirebase } from "./useSignInWithEmailAndPasswordFirebase.login";
import { useFormContext } from "react-hook-form";
import { LoginForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";
import { useEffect } from "react";

export const useLoginSetRememberMeStorage = () => {
  const { watch } = useFormContext<LoginForm>();
  const dictionaries = getDictionaries("en");
  const { mutate: signInWithEmailAndPasswordFirebase } =
    useLoginSignInWithEmailAndPasswordFirebase();
  const mutation = useMutation<RememberMeStorageInterface, any>({
    mutationKey: LoginReactQueryKey.SetRememberMeStorage(),
    mutationFn: () =>
      setRememberMeStorage({
        email: watch(dictionaries.form.email.name),
        password: watch(dictionaries.form.password.name),
      }),
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      signInWithEmailAndPasswordFirebase();
    }
  }, [mutation.isSuccess]);

  return mutation;
};

"use client";
import { useMutation } from "@tanstack/react-query";
import { LoginReactQueryKey } from "../keys";
import { signInWithEmailAndPasswordFirebase } from "@/core/services/firebase";
import { useFormContext } from "react-hook-form";
import { LoginForm } from "../../react_hook_form/keys";
import { UserCredential } from "firebase/auth";
import { getDictionaries } from "../../i18";
import { useEffect } from "react";
import { useLoginPostLoginNexus } from "./usePostLoginNexus.login";

export const useLoginSignInWithEmailAndPasswordFirebase = () => {
  const dictionaries = getDictionaries("en");
  const { watch } = useFormContext<LoginForm>();
  const { mutate: postLoginNexus } = useLoginPostLoginNexus();
  const mutation = useMutation<UserCredential, any>({
    mutationKey: LoginReactQueryKey.SignInWithEmailAndPasswordFirebase(),
    mutationFn: () =>
      signInWithEmailAndPasswordFirebase({
        email: watch(dictionaries.form.email.name),
        password: watch(dictionaries.form.password.name),
      }),
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      postLoginNexus({
        id_token: (
          mutation.data as UserCredential & {
            _tokenResponse: {
              idToken: string;
              displayName: string;
              email: string;
              expires: string;
              kind: string;
              localId: string;
              refreshToken: string;
              registered: boolean;
            };
          }
        )._tokenResponse.idToken,
      });
    }
  }, [mutation.isSuccess]);

  return mutation;
};

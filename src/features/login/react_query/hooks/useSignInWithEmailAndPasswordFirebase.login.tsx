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
import { FirebaseError } from "firebase/app";

export const useLoginSignInWithEmailAndPasswordFirebase = () => {
  const dictionaries = getDictionaries("en");
  const { watch, setValue } = useFormContext<LoginForm>();
  const { mutate: postLoginNexus } = useLoginPostLoginNexus();
  const mutation = useMutation<UserCredential, FirebaseError>({
    mutationKey: LoginReactQueryKey.SignInWithEmailAndPasswordFirebase(),
    mutationFn: () =>
      signInWithEmailAndPasswordFirebase({
        email: watch(dictionaries.form.email.name),
        password: watch(dictionaries.form.password.name),
      }),
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      setValue(
        dictionaries.form.token.name,
        (
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
        )._tokenResponse.idToken
      );
      setValue(dictionaries.form.email.name, mutation.data.user.email);
      postLoginNexus();
    }
  }, [mutation.isSuccess]);

  useEffect(() => {
    if (mutation.isError) {
      const message = mutation.error.message.includes("auth/invalid-credential")
        ? dictionaries.notification.message.template.invalid_login_credentials
        : mutation.error.message.includes("auth/invalid-email")
        ? dictionaries.notification.message.template.invalid_email
        : dictionaries.notification.message.template.internal_server_error;
        
      setValue(dictionaries.notification.is_open.name, true);
      setValue(dictionaries.notification.message.name, message);
      setValue(dictionaries.notification.variant.name, "danger");
    }
  }, [mutation.isError]);

  return mutation;
};

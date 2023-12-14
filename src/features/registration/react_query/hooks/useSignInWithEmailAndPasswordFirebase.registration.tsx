"use client";
import { useMutation } from "@tanstack/react-query";
import { RegistrationReactQueryKey } from "../keys";
import { signInWithEmailAndPasswordFirebase } from "@/core/services/firebase";
import { useFormContext } from "react-hook-form";
import { RegistrationForm } from "../../react_hook_form/keys";
import { UserCredential } from "firebase/auth";
import { getDictionaries } from "../../i18";
import { useEffect } from "react";
import { useRegistrationPostLoginNexus } from "./usePostLoginNexus.registration";

export const useRegistrationSignInWithEmailAndPasswordFirebase = () => {
  const dictionaries = getDictionaries("en");
  const { watch, setValue } = useFormContext<RegistrationForm>();
  const { mutate: postLoginNexus } = useRegistrationPostLoginNexus();
  const mutation = useMutation<UserCredential, any>({
    mutationKey: RegistrationReactQueryKey.SignInWithEmailAndPasswordFirebase(),
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

  return mutation;
};

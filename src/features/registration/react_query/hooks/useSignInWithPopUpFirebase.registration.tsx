"use client";
import { useMutation } from "@tanstack/react-query";
import { RegistrationReactQueryKey } from "../keys";
import { signInWithPopupFirebase } from "@/core/services/firebase";
import { useFormContext } from "react-hook-form";
import { RegistrationForm } from "../../react_hook_form/keys";
import { UserCredential } from "firebase/auth";
import { getDictionaries } from "../../i18";
import { useEffect } from "react";
import { useRegistrationPostLoginNexus } from "./usePostLoginNexus.registration";

export const useRegistrationSignInWithPopupFirebase = () => {
  const dictionaries = getDictionaries("en");
  const { setValue } = useFormContext<RegistrationForm>();
  const { mutate: postLoginNexus } = useRegistrationPostLoginNexus();
  const mutation = useMutation<UserCredential, any>({
    mutationKey: RegistrationReactQueryKey.SignInWithPopupFirebase(),
    mutationFn: () => signInWithPopupFirebase(),
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
      setValue(dictionaries.form.google_email.name, mutation.data.user.email);
      postLoginNexus();
    }
  }, [mutation.isSuccess]);

  return mutation;
};

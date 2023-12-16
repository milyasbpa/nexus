"use client";
import { useMutation } from "@tanstack/react-query";
import { RegistrationReactQueryKey } from "../keys";
import { fetchPostRegisterNexus } from "@/core/services/nexus";
import {
  PostRegisterNexusErrorResponseInterface,
  PostRegisterNexusRequestPayloadInterface,
  PostRegisterNexusSuccessResponseInterface,
} from "@/core/models/nexus";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { RegistrationForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";
import { useRegistrationSignInWithEmailAndPasswordFirebase } from "./useSignInWithEmailAndPasswordFirebase.registration";

export const useRegistrationPostRegisterNexus = () => {
  const { watch, setValue } = useFormContext<RegistrationForm>();
  const dictionaries = getDictionaries("en");
  const { mutate: signInWithEmailAndPasswordFirebase } =
    useRegistrationSignInWithEmailAndPasswordFirebase();
  const mutation = useMutation<
    PostRegisterNexusSuccessResponseInterface,
    PostRegisterNexusErrorResponseInterface
  >({
    mutationKey: RegistrationReactQueryKey.PostRegisterNexus(),
    mutationFn: () => {
      const payload: PostRegisterNexusRequestPayloadInterface = {
        data: {
          fullname: !watch(dictionaries.form.full_name.name).length
            ? undefined
            : watch(dictionaries.form.full_name.name),
          email: watch(dictionaries.form.email.name),
          password: watch(dictionaries.form.password.name),
        },
      };

      return fetchPostRegisterNexus(payload);
    },
  });

  useEffect(() => {
    if (mutation.data) {
      setValue(dictionaries.form.uid.name, mutation.data.data.uid);
      signInWithEmailAndPasswordFirebase();
    }
  }, [mutation.data]);

  useEffect(() => {
    if (mutation.isError) {
      const message = mutation.error.message.includes(
        "The email address is improperly formatted."
      )
        ? dictionaries.notification.message.template.invalid_email
        : mutation.error.message.includes(
            "The password must be a string with at least 6 characters."
          )
        ? dictionaries.notification.message.template.invalid_password_length
        : dictionaries.notification.message.template.internal_server_error;

      setValue(dictionaries.notification.is_open.name, true);
      setValue(dictionaries.notification.message.name, message);
      setValue(dictionaries.notification.variant.name, "danger");
    }
  }, [mutation.isError]);

  return mutation;
};

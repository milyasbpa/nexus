"use client";
import { useMutation } from "@tanstack/react-query";
import { RegistrationReactQueryKey } from "../keys";
import { useFormContext } from "react-hook-form";
import { RegistrationForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";
import { useEffect } from "react";
import { setUserStorage } from "@/core/services/storage/user";
import { UserStorageInterface } from "@/core/models/storage";
import { useRouter } from "next/navigation";
import { NexusWebURL } from "@/core/routers/web";

export const useLoginSetUserStorage = () => {
  const { watch, setValue } = useFormContext<RegistrationForm>();
  const dictionaries = getDictionaries("en");
  const router = useRouter();
  const mutation = useMutation<UserStorageInterface, any>({
    mutationKey: RegistrationReactQueryKey.SetUserStorage(),
    mutationFn: () =>
      setUserStorage({
        full_name:
          watch(dictionaries.form.type.name) === "google_registration"
            ? watch(dictionaries.form.google_full_name.name)
            : watch(dictionaries.form.full_name.name),
        email:
          watch(dictionaries.form.type.name) === "google_registration"
            ? watch(dictionaries.form.google_email.name)
            : watch(dictionaries.form.email.name),
        uid: watch(dictionaries.form.uid.name),
        token: watch(dictionaries.form.token.name),
      }),
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      if (watch(dictionaries.form.type.name) !== "google_registration") {
        setValue(dictionaries.form.actions.register.is_loading.name, false);
      } else {
        setValue(
          dictionaries.form.actions.google_register.is_loading.name,
          false
        );
      }
      router.push(NexusWebURL.getDocuments());
    }
  }, [mutation.isSuccess]);

  return mutation;
};

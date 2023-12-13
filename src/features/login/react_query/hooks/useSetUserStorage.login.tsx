"use client";
import { useMutation } from "@tanstack/react-query";
import { LoginReactQueryKey } from "../keys";
import { useFormContext } from "react-hook-form";
import { LoginForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";
import { useEffect } from "react";
import { setUserStorage } from "@/core/services/storage/user";
import { UserStorageInterface } from "@/core/models/storage";
import { useRouter } from "next/navigation";
import { NexusWebURL } from "@/core/routers/web";

export const useLoginSetUserStorage = () => {
  const { watch } = useFormContext<LoginForm>();
  const dictionaries = getDictionaries("en");
  const router = useRouter();
  const mutation = useMutation<UserStorageInterface, any>({
    mutationKey: LoginReactQueryKey.SetUserStorage(),
    mutationFn: () =>
      setUserStorage({
        email: watch(dictionaries.form.email.name),
        uid: "",
      }),
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      router.push(NexusWebURL.getDocuments());
    }
  }, [mutation.isSuccess]);

  return mutation;
};

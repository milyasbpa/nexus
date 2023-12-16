"use client";
import { useQuery } from "@tanstack/react-query";
import { LoginReactQueryKey } from "../keys";
import { getRememberMeStorage } from "@/core/services/storage";
import { RememberMeStorageInterface } from "@/core/models/storage/remember_me";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { LoginForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";

export const useLoginGetRememberMeStorage = () => {
  const { setValue } = useFormContext<LoginForm>();
  const dictionaries = getDictionaries("en");
  const query = useQuery<RememberMeStorageInterface | undefined, any>({
    queryKey: LoginReactQueryKey.SetRememberMeStorage(),
    queryFn: () => getRememberMeStorage(),
  });

  useEffect(() => {
    if (!!query.data) {
      setValue(dictionaries.form.email.name, query.data.email);
      setValue(dictionaries.form.password.name, query.data.password);
      setValue(dictionaries.form.remember_me.name, true);
    }
  }, [query.data]);

  return query;
};

"use client";
import { useQuery } from "@tanstack/react-query";
import { DashboardReactQueryKey } from "../keys";
import { getUserStorage } from "@/core/services/storage";
import { UserStorageInterface } from "@/core/models/storage";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { DashboardForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";

export const useDashboardGetUserStorage = () => {
  const { setValue } = useFormContext<DashboardForm>();
  const dictionaries = getDictionaries("en");
  const query = useQuery<UserStorageInterface | undefined, any>({
    queryKey: DashboardReactQueryKey.GetUserStorage(),
    queryFn: () => {
      return getUserStorage();
    },
  });

  useEffect(() => {
    if (query.data) {
      setValue(dictionaries.profile.data.name, query.data.full_name);
    }
  }, [query.data]);

  return query;
};

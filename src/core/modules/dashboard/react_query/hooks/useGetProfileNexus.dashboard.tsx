"use client";
import {
  GetProfileNexusRequestPayloadInterface,
  GetProfileNexusSuccessResponseInterface,
} from "@/core/models/nexus";
import { useQuery } from "@tanstack/react-query";
import { DashboardReactQueryKey } from "../keys";
import { fetchGetProfileNexus } from "@/core/services/nexus";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { DashboardForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";
import { queryClient } from "@/core/config/react_query";
import { UserStorageInterface } from "@/core/models/storage";

export const useDashboardGetProfileNexus = () => {
  const { setValue } = useFormContext<DashboardForm>();
  const dictionaries = getDictionaries("en");
  const userStorageData = queryClient.getQueryData(
    DashboardReactQueryKey.GetUserStorage()
  ) as undefined | UserStorageInterface;

  const query = useQuery<
    GetProfileNexusSuccessResponseInterface | undefined,
    any
  >({
    enabled: !!userStorageData,
    queryKey: DashboardReactQueryKey.GetProfileNexus(),
    queryFn: () => {
      const payload: GetProfileNexusRequestPayloadInterface = {
        headers: {
          uid: userStorageData?.uid ?? "",
          ["access-token"]: userStorageData?.token ?? "",
        },
      };
      return fetchGetProfileNexus(payload);
    },
  });

  // useEffect(() => {
  //   if (query.data) {
  //     setValue(
  //       dictionaries.profile.data.name,
  //       query.data.data?.full_name ?? query.data.data.email
  //     );
  //   }
  // }, [query.data]);
};

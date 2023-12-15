"use client";
import { useQuery } from "@tanstack/react-query";
import { DashboardReactQueryKey } from "../keys";
import { getUserStorage } from "@/core/services/storage";
import { UserStorageInterface } from "@/core/models/storage";

export const useDashboardGetUserStorage = () => {
  const query = useQuery<UserStorageInterface | undefined, any>({
    queryKey: DashboardReactQueryKey.GetUserStorage(),
    queryFn: () => {
      return getUserStorage();
    },
  });

  return query;
};

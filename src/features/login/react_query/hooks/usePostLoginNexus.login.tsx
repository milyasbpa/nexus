"use client";
import { useMutation } from "@tanstack/react-query";
import { LoginReactQueryKey } from "../keys";
import { fetchPostLoginNexus } from "@/core/services/nexus";
import {
  PostLoginNexusErrorResponseInterface,
  PostLoginNexusRequestBodyInterface,
  PostLoginNexusSuccessResponseInterface,
} from "@/core/models/nexus";
import { useLoginSetUserStorage } from "./useSetUserStorage.login";
import { useEffect } from "react";

export const useLoginPostLoginNexus = () => {
  const { mutate: setUserStorage } = useLoginSetUserStorage();
  const mutation = useMutation<
    PostLoginNexusSuccessResponseInterface,
    PostLoginNexusErrorResponseInterface,
    PostLoginNexusRequestBodyInterface
  >({
    mutationKey: LoginReactQueryKey.PostLoginNexus(),
    mutationFn: (payload: PostLoginNexusRequestBodyInterface) =>
      fetchPostLoginNexus(payload),
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      setUserStorage();
    }
  }, [mutation.isSuccess]);

  return mutation;
};

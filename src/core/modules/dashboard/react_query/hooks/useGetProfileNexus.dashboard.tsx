import { GetProfileNexusSuccessResponseInterface } from "@/core/models/nexus";
import { useQuery } from "@tanstack/react-query";
import { DashboardReactQueryKey } from "../keys";
import { fetchGetProfileNexus } from "@/core/services/nexus";
import { useEffect } from "react";

export const useDashboardGetProfileNexus = () => {
  const query = useQuery<
    GetProfileNexusSuccessResponseInterface | undefined,
    any
  >({
    queryKey: DashboardReactQueryKey.GetProfileNexus(),
    queryFn: () => fetchGetProfileNexus(),
  });

  //   useEffect(()=>{

  //   },[])
};

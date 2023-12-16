"use client";
import * as React from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { getDictionaries } from "../../i18";
import { useDashboardGetProfileNexus } from "../../react_query/hooks/useGetProfileNexus.dashboard";
import { useFormContext } from "react-hook-form";
import { DashboardForm } from "../../react_hook_form/keys";
import { useDashboardGetUserStorage } from "../../react_query/hooks/useGetUserStorage.dashboard";
import { NexusWebURL } from "@/core/routers/web";

export const ProfileDashboard = () => {
  const dictionaries = getDictionaries("en");
  const router = useRouter();
  const { watch } = useFormContext<DashboardForm>();
  useDashboardGetUserStorage();
  useDashboardGetProfileNexus();

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const name =
    watch(dictionaries.profile.data.name).length >= 24
      ? `${watch(dictionaries.profile.data.name).slice(0, 24)}...`
      : watch(dictionaries.profile.data.name);

  const handleClickLogOut = () => {
    router.push(NexusWebURL.getLogin());
  };
  return (
    <div className={clsx("relative")}>
      <button onClick={handleClick}>
        <img
          src={"/icons/navbar/user.svg"}
          className={clsx("w-[1.75rem] h-[1.75rem]")}
        />
      </button>

      <div
        className={clsx(
          isOpen ? "grid" : "hidden",
          "absolute right-0 top-[2.25rem]",
          "z-10",
          "grid-cols-1 items-start content-start justify-end justify-items-end",
          "w-[188px]",
          "bg-[white]",
          "rounded-[0.25rem]",
          "border border-[#BFCAD7]"
        )}
      >
        <div
          className={clsx(
            "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]",
            "w-full",
            "px-[0.5rem] py-[0.5rem]",
            "bg-[#F4F8FC]"
          )}
        >
          <div
            className={clsx(
              "flex items-center justify-center",
              "w-[1.75rem] h-[1.75rem]",
              "rounded-[0.125rem]",
              "bg-[#002566]"
            )}
          >
            <img
              src={"/icons/navbar/profile.svg"}
              className={clsx("w-[1rem] h-[1rem]")}
            />
          </div>
          <p className={clsx("text-[0.625rem] text-[#232931] font-normal")}>
            {name}
          </p>
        </div>

        <button
          className={clsx(
            "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]",
            "w-full",
            "px-[0.5rem] py-[0.5rem]"
          )}
          onClick={handleClickLogOut}
        >
          <img src={"/icons/navbar/logout.svg"} />
          <p className={clsx("text-[0.625rem] font-normal text-[#FC5959]")}>
            {dictionaries.profile.actions.logout}
          </p>
        </button>
      </div>
    </div>
  );
};

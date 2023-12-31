"use client";
import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../i18";
import { libreBaskerville } from "@/core/fonts";
import Link from "next/link";
import { ProfileDashboard } from "../fragments/profile";
import { FormProvider, useForm } from "react-hook-form";
import { defaultValues } from "../react_hook_form/constants";
import { usePathname } from "next/navigation";

export interface DashboardContainerProps {
  children?: React.ReactNode;
}

export const DashboardContainer = ({ children }: DashboardContainerProps) => {
  const pathname = usePathname();
  const dictionaries = getDictionaries("en");
  const methods = useForm({
    defaultValues: defaultValues,
  });

  return (
    <div className={clsx("w-full")}>
      <FormProvider {...methods}>
        <div
          className={clsx(
            "absolute top-0 left-0 right-0",
            "bg-[#F4F8FC]",
            "h-[68px]",
            "px-[1.5rem] lg:px-[52px]",
            "grid grid-flow-col justify-between justify-items-start items-center content-center",
            "w-full"
          )}
        >
          <h1
            className={clsx(
              "text-[26px] text-[#232931] font-normal tracking-[4.68px]",
              libreBaskerville.className
            )}
          >
            {dictionaries.brand.name}
          </h1>

          {/* menu */}

          <div
            className={clsx(
              "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[1rem]"
            )}
          >
            {dictionaries.menu.data.map((menu) => (
              <Link
                href={menu.link}
                key={menu.id}
                className={clsx(
                  "grid grid-cols-1 place-content-start place-items-start gap-[0.125rem]",
                  "text-[0.875rem] text-[#232931] font-semibold"
                )}
              >
                {menu.name}

                <div
                  className={clsx(
                    "w-[1.75rem] h-[0.125rem]",
                    pathname.includes(menu.id) ? "bg-[#232931]" : "bg-[white]",
                    "rounded-[0.25rem]"
                  )}
                />
              </Link>
            ))}
          </div>

          <ProfileDashboard />
        </div>
      </FormProvider>

      <div className={clsx("w-full", "pt-[68px]")}>{children}</div>
    </div>
  );
};

import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../i18";
import { libreBaskerville } from "@/core/fonts";
import Link from "next/link";

export interface DashboardContainerProps {
  children?: React.ReactNode;
}

export const DashboardContainer = ({ children }: DashboardContainerProps) => {
  const dictionaries = getDictionaries("en");
  return (
    <div className={clsx("w-full")}>
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
                "text-[0.875rem] text-[#232931] font-semibold"
              )}
            >
              {menu.name}
            </Link>
          ))}
        </div>

        <div></div>
      </div>

      <div className={clsx("w-full", "pt-[68px]")}>{children}</div>
    </div>
  );
};

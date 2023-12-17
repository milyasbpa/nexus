import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../i18";
import Link from "next/link";
import { NexusWebURL } from "@/core/routers/web";
import { DashboardContainer } from "@/core/modules/dashboard/containers";

export const AboutContainer = () => {
  const dictionaries = getDictionaries("en");
  return (
    <DashboardContainer>
      <div
        className={clsx(
          "grid grid-cols-2 place-content-start place-items-start",
          "w-full h-[100vh_-_68px]"
        )}
      >
        <div
          className={clsx(
            "grid grid-cols-1 place-content-start place-items-start gap-[]",
            "w-full h-full"
          )}
        >
          <img src={"/images/about/nexus.png"} />
        </div>

        <div
          className={clsx(
            "grid grid-cols-1 items-center content-center justify-start justify-items-start gap-[1.75rem]",
            "w-full h-full",
            "pl-[5rem]"
          )}
        >
          <div
            className={clsx(
              "grid grid-cols-1 items-center content-center justify-start justify-items-start gap-[0.5rem]",
              "w-full"
            )}
          >
            <p
              className={clsx(
                "text-[#232931] text-[1rem] font-medium font-plusJakartaSans"
              )}
            >
              {dictionaries.brand.name}
            </p>
            <p
              className={clsx(
                "text-[#232931] text-[54px] font-semibold font-plusJakartaSans"
              )}
            >
              {dictionaries.title}
            </p>

            <p
              className={clsx(
                "text-[#404852] text-[1.125rem] font-light font-plusJakartaSans"
              )}
              dangerouslySetInnerHTML={{ __html: dictionaries.message }}
            />
          </div>
          <Link
            href={NexusWebURL.getDocuments()}
            className={clsx(
              "text-[#002566] text-[1.125rem] font-medium underline font-plusJakartaSans"
            )}
          >
            {dictionaries.actions.primary}
          </Link>
        </div>
      </div>
    </DashboardContainer>
  );
};

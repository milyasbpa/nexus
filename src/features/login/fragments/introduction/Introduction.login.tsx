import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18";

export const IntroductionLogin = () => {
  const dictionaries = getDictionaries("en");
  return (
    <div
      className={clsx(
        "hidden lg:grid grid-cols-1 place-content-center place-items-center gap-[4rem]",
        "w-full h-full",
        "bg-[#EBF3FA]",
        "px-[1.5rem]"
      )}
    >
      <img
        src={"/images/login/nexus.png"}
        className={clsx("w-[580px] h-[316px]")}
      />
      <div
        className={clsx(
          "grid grid-cols-1 place-content-center place-items-center gap-[4rem]",
          "w-full h-full"
        )}
      >
        <div className={clsx("max-w-[600px] w-full")}>
          <p
            className={clsx(
              "text-[1.125rem] font-normal text-[#404852] text-center font-plusJakartaSans"
            )}
            dangerouslySetInnerHTML={{
              __html: dictionaries.introduction.message,
            }}
          />
        </div>

        <div
          className={clsx(
            "grid grid-cols-1 items-start content-start justify-center justify-items-center gap-[1.5rem]",
            "w-full"
          )}
        >
          <p
            className={clsx(
              "text-[1.125rem] font-medium text-center text-[#697584] font-plusJakartaSans"
            )}
          >
            {dictionaries.introduction.sponsor.title}
          </p>
          <div
            className={clsx(
              "grid grid-flow-col place-content-center place-items-center gap-[1.5rem]",
              "w-full"
            )}
          >
            <img
              src={"/images/login/kumparan.png"}
              className={clsx("w-[150px] h-[2.25rem]")}
            />
            <img
              src={"/images/login/tech_in_asia.png"}
              className={clsx("w-[180px] h-[2rem]")}
            />
            <img
              src={"/images/login/cosmopolitan.png"}
              className={clsx("w-[130px] h-[1.5rem]")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

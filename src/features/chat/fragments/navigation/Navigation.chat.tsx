import * as React from "react";
import clsx from "clsx";
import Link from "next/link";
import { NexusWebURL } from "@/core/routers/web";
import { getDictionaries } from "../../i18";
import { useRouter } from "next/navigation";
import { queryClient } from "@/core/config/react_query";
import { ChatReactQueryKey } from "../../react_query/keys";
import { UserStorageInterface } from "@/core/models/storage";

export const NavigationChat = () => {
  const dictionaries = getDictionaries("en");

  const router = useRouter();

  const userStorageData = queryClient.getQueryData(
    ChatReactQueryKey.GetUserStorage()
  ) as undefined | UserStorageInterface;

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const name =
    !!userStorageData && userStorageData?.email.length >= 24
      ? `${userStorageData.email.slice(0, 24)}...`
      : userStorageData?.email ?? "";

  const handleClickLogOut = () => {
    router.push(NexusWebURL.getLogin());
  };
  return (
    <div
      className={clsx(
        "absolute top-0 left-0 right-0",
        "z-40",
        "bg-[#F4F8FC]",
        "h-[68px]",
        "px-[1.5rem] lg:px-[52px]",
        "grid grid-flow-col justify-between justify-items-start items-center content-center",
        "w-full"
      )}
    >
      <Link
        href={NexusWebURL.getDocuments()}
        className={clsx("cursor-pointer")}
      >
        <h1 className={clsx("text-[0.875rem] text-[#232931] font-semibold")}>
          {dictionaries.actions.back}
        </h1>
      </Link>

      {/* menu */}

      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[1rem]"
        )}
      >
        <h1
          className={clsx(
            "text-[26px] text-[#232931] font-normal tracking-[4.68px] font-libreBaskerville"
          )}
        >
          {dictionaries.brand.name}
        </h1>
      </div>

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
              {dictionaries.actions.logout}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../i18";
import Link from "next/link";
import { libreBaskerville } from "@/core/fonts";
import { Textfield } from "@/core/components/textfield/Textfield.component";
import { Passwordfield } from "@/core/components/passwordfield";
import Checkbox from "@/core/components/checkbox/Checkbox.component";

export interface ILoginContainerProps {}

export const LoginContainer = (props: ILoginContainerProps) => {
  const dictionaries = getDictionaries("en");
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-center place-items-center gap-[1.5rem]",
        "w-full h-[100vh]"
      )}
    >
      <h1
        className={clsx(
          "text-[34px] font-bold text-[#232931]",
          libreBaskerville.className
        )}
      >
        {dictionaries.brand.name}
      </h1>

      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[1.5rem]",
          "max-w-[460px] w-full",
          "pt-[2rem] pb-[1.5rem] px-[30px]",
          "bg-white",
          "rounded-[0.5rem]"
        )}
        style={{ boxShadow: "0px 1px 29px 0px rgba(0, 67, 71, 0.10)" }}
      >
        <div
          className={clsx(
            "grid grid-cols-1 items-start content-start justify-center justify-items-center gap-[1rem]",
            "w-full"
          )}
        >
          <h2
            className={clsx(
              "text-[1.5rem] font-bold text-[#232931] text-center"
            )}
          >
            {dictionaries.form.name}
          </h2>
          <p
            className={clsx(
              "text-[0.875rem] font-normal text-[#404852] text-center"
            )}
          >
            {dictionaries.form.description}
          </p>
        </div>
        <form
          className={clsx(
            "grid grid-cols-1 place-content-start place-items-start gap-[1.5rem]",
            "w-full"
          )}
        >
          <Textfield
            label={dictionaries.form.email.label}
            // value={props.email}
            placeholder={dictionaries.form.email.placeholder}
            // onChange={handleChangeEmail}
            // onKeyDown={onKeyDownHandler}
          />
          <Passwordfield
            label={dictionaries.form.password.label}
            // value={props.email}
            placeholder={dictionaries.form.password.placeholder}
            // onChange={handleChangeEmail}
            // onKeyDown={onKeyDownHandler}
          />
          <Checkbox
            name={dictionaries.form.remember_me.label}
            checked={true}
            // onChange={handleChangeRememberMe}
          />

          <button
            className={clsx(
              "flex items-center justify-center",
              "w-full",
              "rounded-[0.5rem]",
              "px-[1rem] py-[1rem]",
              "bg-[#002566]",
              "text-[1rem] font-normal text-white"
            )}
          >
            {dictionaries.form.actions.login}
          </button>

          <div
            className={clsx(
              "grid grid-cols-[1fr_auto_1fr] items-center content-center justify-start justify-item-start gap-[0.75rem]",
              "w-full"
            )}
          >
            <div className={clsx("w-full h-[1px]", "bg-[#9AA8B8]")} />
            <p className={clsx("text-[1rem] font-normal text-[#9AA8B8]")}>
              {"or"}
            </p>
            <div className={clsx("w-full h-[1px]", "bg-[#9AA8B8]")} />
          </div>

          <button
            className={clsx(
              "flex items-center justify-center",
              "w-full",
              "rounded-[0.5rem]",
              "px-[1rem] py-[1rem]",
              "border border-[#002566]",
              "bg-white",
              "text-[1rem] font-normal text-[#232931]"
            )}
          >
            {dictionaries.form.actions.login}
          </button>
        </form>
      </div>

      <p className={clsx("text-[1rem] font-normal text-[#404852]")}>
        {dictionaries.form.actions.dont_have_account.description}
        <Link
          href={dictionaries.form.actions.dont_have_account.actions.link}
          className={clsx("text-[1rem] font-semibold text-[#232931]")}
        >
          {dictionaries.form.actions.dont_have_account.actions.name}
        </Link>
      </p>
    </div>
  );
};

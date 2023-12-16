"use client";
import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../i18";
import Link from "next/link";
import { libreBaskerville } from "@/core/fonts";
import { RegistrationFormRegistration } from "../fragments/registration_form/RegistrationForm.registration";
import { GoogleRegistrationFormRegistration } from "../fragments/google_registration_form";
import { FormProvider, useForm } from "react-hook-form";
import { defaultValues } from "../react_hook_form/constants/default_values";
import { IntroductionRegistration } from "../fragments/introduction/Introduction.registration";
import { NotificationRegistration } from "../fragments/notification";

export const RegistrationContainer = () => {
  const dictionaries = getDictionaries("en");
  const methods = useForm({
    defaultValues: defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <div
        className={clsx(
          "grid grid-cols-1 lg:grid-cols-2 place-content-start place-items-start",
          "w-full h-full"
        )}
      >
        <div
          className={clsx(
            "grid grid-cols-1 place-content-center place-items-center gap-[1rem]",
            "w-full h-[100vh]",
            "px-[1.5rem]"
          )}
        >
          <h1
            className={clsx(
              "text-[34px] font-bold text-[#232931]",
              "font-libreBaskerville"
            )}
          >
            {dictionaries.brand.name}
          </h1>

          <div
            className={clsx(
              "grid grid-cols-1 place-content-start place-items-start gap-[1.5rem]",
              "max-w-[460px] w-full",
              "pt-[1rem] pb-[1.5rem] px-[30px]",
              "bg-white",
              "rounded-[0.5rem]"
            )}
            style={{ boxShadow: "0px 1px 29px 0px rgba(0, 67, 71, 0.10)" }}
          >
            <div
              className={clsx(
                "grid grid-cols-1 items-start content-start justify-center justify-items-center gap-[0.5rem]",
                "w-full"
              )}
            >
              <h2
                className={clsx(
                  "text-[1.5rem] font-bold text-[#232931] text-center font-plusJakartaSans"
                )}
              >
                {dictionaries.form.name}
              </h2>
              <p
                className={clsx(
                  "text-[0.875rem] font-normal text-[#404852] text-center font-plusJakartaSans"
                )}
              >
                {dictionaries.form.description}
              </p>
            </div>

            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
                "w-full"
              )}
            >
              <NotificationRegistration />
              <RegistrationFormRegistration />
              <div
                className={clsx(
                  "grid grid-cols-[1fr_auto_1fr] items-center content-center justify-start justify-item-start gap-[0.75rem]",
                  "w-full"
                )}
              >
                <div className={clsx("w-full h-[1px]", "bg-[#9AA8B8]")} />
                <p
                  className={clsx(
                    "text-[1rem] font-normal text-[#9AA8B8] font-plusJakartaSans"
                  )}
                >
                  {"or"}
                </p>
                <div className={clsx("w-full h-[1px]", "bg-[#9AA8B8]")} />
              </div>
              <GoogleRegistrationFormRegistration />
            </div>
          </div>

          <p className={clsx("text-[1rem] font-normal text-[#404852]")}>
            {dictionaries.form.actions.dont_have_account.description}
            <Link
              href={dictionaries.form.actions.dont_have_account.actions.link}
              className={clsx(
                "text-[1rem] font-semibold text-[#232931] font-plusJakartaSans"
              )}
            >
              {dictionaries.form.actions.dont_have_account.actions.name}
            </Link>
          </p>
        </div>

        <IntroductionRegistration />
      </div>
    </FormProvider>
  );
};

"use client";
import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18";
import { Textfield } from "@/core/components/textfield";
import { Passwordfield } from "@/core/components/passwordfield";
import { useFormContext } from "react-hook-form";
import { RegistrationForm } from "../../react_hook_form/keys";
import { useRegistrationPostRegisterNexus } from "../../react_query/hooks/usePostRegisterNexus.registration";
import { Regex } from "@/core/utils/validation";

export const RegistrationFormRegistration = () => {
  const dictionaries = getDictionaries("en");
  const {
    setValue,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext<RegistrationForm>();
  const { mutate: postRegisterNexus } = useRegistrationPostRegisterNexus();

  const handleChangeFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.name, e.currentTarget.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!Regex.email.test(e.currentTarget.value)) {
      setError(e.currentTarget.name, {
        message: dictionaries.form.errors.invalid_email.message,
      });
    } else {
      clearErrors(e.currentTarget.name);
    }
    setValue(e.currentTarget.name, e.currentTarget.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!Regex.password.test(e.currentTarget.value)) {
      setError(e.currentTarget.name, {
        message: dictionaries.form.errors.invalid_password_format.message,
      });
    } else {
      clearErrors(e.currentTarget.name);
    }
    setValue(e.currentTarget.name, e.currentTarget.value);
  };

  const handleChangePasswordConfirmation = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (watch(dictionaries.form.password.name) !== e.currentTarget.value) {
      setError(e.currentTarget.name, {
        message: dictionaries.form.errors.password_not_match.message,
      });
    } else {
      clearErrors(e.currentTarget.name);
    }
    setValue(e.currentTarget.name, e.currentTarget.value);
  };

  const handleClickRegister = () => {
    postRegisterNexus();
  };

  const isRegisterDisabled =
    !watch(dictionaries.form.email.name).length ||
    !watch(dictionaries.form.password.name).length ||
    !watch(dictionaries.form.password_confirmation.name).length ||
    !!Object.keys(errors).length;

  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
        "w-full"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[0.5rem]",
          "w-full"
        )}
      >
        <Textfield
          name={dictionaries.form.full_name.name}
          label={dictionaries.form.full_name.label}
          value={watch(dictionaries.form.full_name.name)}
          placeholder={dictionaries.form.full_name.placeholder}
          onChange={handleChangeFullName}
        />
        <div
          className={clsx(
            "grid grid-cols-1 place-content-start place-items-start gap-[0.25rem]",
            "w-full"
          )}
        >
          <Textfield
            name={dictionaries.form.email.name}
            label={dictionaries.form.email.label}
            value={watch(dictionaries.form.email.name)}
            placeholder={dictionaries.form.email.placeholder}
            onChange={handleChangeEmail}
          />
          {errors[dictionaries.form.email.name] && (
            <p
              className={clsx(
                "text-[0.625rem] text-[#FC5959] font-normal font-plusJakartaSans"
              )}
            >
              {String(errors[dictionaries.form.email.name]?.message)}
            </p>
          )}
        </div>

        <div
          className={clsx(
            "grid grid-cols-1 place-content-start place-items-start gap-[0.25rem]",
            "w-full"
          )}
        >
          <Passwordfield
            name={dictionaries.form.password.name}
            label={dictionaries.form.password.label}
            value={watch(dictionaries.form.password.name)}
            placeholder={dictionaries.form.password.placeholder}
            onChange={handleChangePassword}
          />
          {errors[dictionaries.form.password.name] && (
            <p
              className={clsx(
                "text-[0.625rem] text-[#FC5959] font-normal font-plusJakartaSans"
              )}
            >
              {String(errors[dictionaries.form.password.name]?.message)}
            </p>
          )}
        </div>
        <div
          className={clsx(
            "grid grid-cols-1 place-content-start place-items-start gap-[0.25rem]",
            "w-full"
          )}
        >
          <Passwordfield
            name={dictionaries.form.password_confirmation.name}
            label={dictionaries.form.password_confirmation.label}
            value={watch(dictionaries.form.password_confirmation.name)}
            placeholder={dictionaries.form.password_confirmation.placeholder}
            onChange={handleChangePasswordConfirmation}
          />
          {errors[dictionaries.form.password_confirmation.name] && (
            <p
              className={clsx(
                "text-[0.625rem] text-[#FC5959] font-normal font-plusJakartaSans"
              )}
            >
              {String(
                errors[dictionaries.form.password_confirmation.name]?.message
              )}
            </p>
          )}
        </div>
      </div>
      <button
        className={clsx(
          "flex items-center justify-center",
          "w-full",
          "rounded-[0.5rem]",
          "px-[1rem] py-[1rem]",
          "bg-[#002566] disabled:bg-[#99A8C2]",
          "text-[1rem] font-normal text-white font-plusJakartaSans"
        )}
        disabled={isRegisterDisabled}
        onClick={handleClickRegister}
      >
        {dictionaries.form.actions.register}
      </button>
    </div>
  );
};

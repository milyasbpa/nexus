"use client";
import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18";
import { Textfield } from "@/core/components/textfield";
import { Passwordfield } from "@/core/components/passwordfield";
import { useFormContext } from "react-hook-form";
import { RegistrationForm } from "../../react_hook_form/keys";
import { useRegistrationPostRegisterNexus } from "../../react_query/hooks/usePostRegisterNexus.registration";

export const RegistrationFormRegistration = () => {
  const dictionaries = getDictionaries("en");
  const { setValue, watch } = useFormContext<RegistrationForm>();
  const { mutate: postRegisterNexus } = useRegistrationPostRegisterNexus();

  const handleChangeFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.name, e.currentTarget.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.name, e.currentTarget.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.name, e.currentTarget.value);
  };

  const handleChangePasswordConfirmation = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(e.currentTarget.name, e.currentTarget.value);
  };

  const handleClickRegister = () => {
    postRegisterNexus();
  };

  const isRegisterDisabled =
    !watch(dictionaries.form.email.name).length ||
    !watch(dictionaries.form.password.name).length ||
    !watch(dictionaries.form.password_confirmation.name).length;

  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1.5rem]",
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
      <Textfield
        name={dictionaries.form.email.name}
        label={dictionaries.form.email.label}
        value={watch(dictionaries.form.email.name)}
        placeholder={dictionaries.form.email.placeholder}
        onChange={handleChangeEmail}
      />
      <Passwordfield
        name={dictionaries.form.password.name}
        label={dictionaries.form.password.label}
        value={watch(dictionaries.form.password.name)}
        placeholder={dictionaries.form.password.placeholder}
        onChange={handleChangePassword}
      />
      <Passwordfield
        name={dictionaries.form.password_confirmation.name}
        label={dictionaries.form.password_confirmation.label}
        value={watch(dictionaries.form.password_confirmation.name)}
        placeholder={dictionaries.form.password_confirmation.placeholder}
        onChange={handleChangePasswordConfirmation}
      />

      <button
        className={clsx(
          "flex items-center justify-center",
          "w-full",
          "rounded-[0.5rem]",
          "px-[1rem] py-[1rem]",
          "bg-[#002566] disabled:bg-[#99A8C2]",
          "text-[1rem] font-normal text-white"
        )}
        disabled={isRegisterDisabled}
        onClick={handleClickRegister}
      >
        {dictionaries.form.actions.register}
      </button>
    </div>
  );
};

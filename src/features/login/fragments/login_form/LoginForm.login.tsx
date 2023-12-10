"use client";
import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18";
import { Textfield } from "@/core/components/textfield";
import { Passwordfield } from "@/core/components/passwordfield";
import { Checkbox } from "@/core/components/checkbox/Checkbox.component";
import { useFormContext } from "react-hook-form";
import { LoginForm } from "../../react_hook_form/keys";

export const LoginFormLogin = () => {
  const dictionaries = getDictionaries("en");
  const { setValue, watch } = useFormContext<LoginForm>();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.name, e.currentTarget.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.name, e.currentTarget.value);
  };

  const handleChangeRememberMe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.name, !watch(e.currentTarget.name));
  };
  return (
    <form
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1.5rem]",
        "w-full"
      )}
    >
      <Textfield
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
      <Checkbox
        label={dictionaries.form.remember_me.label}
        name={dictionaries.form.remember_me.name}
        checked={watch(dictionaries.form.remember_me.name)}
        onChange={handleChangeRememberMe}
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
    </form>
  );
};

"use client";
import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18";
import { Textfield } from "@/core/components/textfield";
import { Passwordfield } from "@/core/components/passwordfield";
import { Checkbox } from "@/core/components/checkbox/Checkbox.component";
import { useFormContext } from "react-hook-form";
import { LoginForm } from "../../react_hook_form/keys";
import { useLoginSignInWithEmailAndPasswordFirebase } from "../../react_query/hooks/useSignInWithEmailAndPasswordFirebase.login";
import { useLoginGetRememberMeStorage } from "../../react_query/hooks/useGetRememberMeStorage.login";
import { useLoginSetRememberMeStorage } from "../../react_query/hooks/useSetRememberMeStorage.login";
import { Regex } from "@/core/utils/validation";
import { ClipLoader } from "react-spinners";

export const LoginFormLogin = () => {
  const dictionaries = getDictionaries("en");
  const {
    setValue,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext<LoginForm>();
  useLoginGetRememberMeStorage();
  const { mutate: signInWithEmailAndPasswordFirebase } =
    useLoginSignInWithEmailAndPasswordFirebase();
  const { mutate: setRememberMeStorage } = useLoginSetRememberMeStorage();

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

  const handleChangeRememberMe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.name, !watch(e.currentTarget.name));
  };

  const handleClickLogin = () => {
    setValue(dictionaries.form.type.name, "email_password_login");
    setValue(dictionaries.form.actions.login.is_loading.name, true);
    if (watch(dictionaries.form.remember_me.name)) {
      setRememberMeStorage();
    } else {
      signInWithEmailAndPasswordFirebase();
    }
  };

  const isLoginDisabled =
    !watch(dictionaries.form.email.name)?.length ||
    !watch(dictionaries.form.password.name)?.length ||
    !!Object.keys(errors).length ||
    watch(dictionaries.form.actions.login.is_loading.name);

  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1.5rem]",
        "w-full"
      )}
    >
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
      <Checkbox
        label={dictionaries.form.remember_me.label}
        name={dictionaries.form.remember_me.name}
        checked={watch(dictionaries.form.remember_me.name)}
        onChange={handleChangeRememberMe}
      />

      <button
        className={clsx(
          "grid grid-flow-col items-center content-center justify-center justify-items-center gap-[0.5rem]",
          "w-full",
          "rounded-[0.5rem]",
          "px-[1rem] py-[1rem]",
          "bg-[#002566] disabled:bg-[#99A8C2]",
          "text-[1rem] font-normal text-white"
        )}
        disabled={isLoginDisabled}
        onClick={handleClickLogin}
      >
        <ClipLoader
          color={"#FFFFFF"}
          loading={watch(dictionaries.form.actions.login.is_loading.name)}
          size={16}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        {dictionaries.form.actions.login.text}
      </button>
    </div>
  );
};

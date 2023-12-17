import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18";
import { useLoginSignInWithPopupFirebase } from "../../react_query/hooks/useSignInWithPopUpFirebase.login";
import { useFormContext } from "react-hook-form";
import { LoginForm } from "../../react_hook_form/keys";
import { ClipLoader } from "react-spinners";

export const GoogleLoginFormLogin = () => {
  const { watch, setValue } = useFormContext<LoginForm>();

  const { mutate: signInWithPopupFirebase } = useLoginSignInWithPopupFirebase();
  const dictionaries = getDictionaries("en");
  const handleClickLogin = () => {
    setValue(dictionaries.form.type.name, "google_login");
    setValue(dictionaries.form.actions.google_login.is_loading.name, true);
    signInWithPopupFirebase();
  };
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1.5rem]",
        "w-full"
      )}
    >
      <button
        className={clsx(
          "flex items-center justify-center",
          "w-full",
          "rounded-[0.5rem]",
          "px-[1rem] py-[1rem]",
          "border border-[#002566]",
          "bg-white",
          "text-[1rem] font-normal text-[#232931]",
          "relative"
        )}
        onClick={handleClickLogin}
      >
        <img
          src={"/icons/login/google.svg"}
          className={clsx("absolute left-[1rem]", "w-[1.5rem] h-[1.5rem]")}
        />
        <div
          className={clsx(
            "grid grid-flow-col items-center content-center justify-center justify-items-center gap-[0.5rem]"
          )}
        >
          <ClipLoader
            color={"#002566"}
            loading={watch(
              dictionaries.form.actions.google_login.is_loading.name
            )}
            size={16}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          {dictionaries.form.actions.google_login.text}
        </div>
      </button>
    </div>
  );
};

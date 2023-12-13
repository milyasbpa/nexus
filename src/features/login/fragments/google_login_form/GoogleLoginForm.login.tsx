import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18";
import { useLoginSignInWithPopupFirebase } from "../../react_query/hooks/useSignInWithPopUpFirebase.login";

export const GoogleLoginFormLogin = () => {
  const { mutate: signInWithPopupFirebase } = useLoginSignInWithPopupFirebase();
  const dictionaries = getDictionaries("en");
  const handleClickLogin = () => {
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
        {dictionaries.form.actions.google_login}
      </button>
    </div>
  );
};

"use client";
import { useState, useMemo, HTMLInputTypeAttribute } from "react";
import clsx from "clsx";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/20/solid";

export interface PasswordfieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  showStrength?: boolean;
  label?: string;
  need_symbol_label?: string;
  need_min_length_label?: string;
  need_cap_label?: string;
  need_number_label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Passwordfield = ({
  label = "",
  onChange,
  showStrength = false,
  need_symbol_label = "",
  need_min_length_label = "",
  need_cap_label = "",
  need_number_label = "",
  ...props
}: PasswordfieldProps) => {
  const { type, ...otherProps } = props;
  const [show, setShow] = useState(false);
  const [focus, setFocus] = useState(false);

  const handleShowPassword = () => {
    setShow(true);
  };
  const handleHidePassword = () => {
    setShow(false);
  };

  const inputType: HTMLInputTypeAttribute | undefined = useMemo(
    () => (show ? "text" : "password"),
    [show]
  );

  const handleFocus = () => {
    setFocus(true);
  };
  const handleBlur = () => {
    setFocus(false);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={clsx("w-full relative")}>
      <div
        className={clsx(
          "grid",
          "w-full",
          "grid-cols-1 place-content-start place-items-start gap-y-[0.75rem]"
        )}
      >
        <label
          className={clsx("text-sm leading-[normal] text-[rgba(35,41,49,1)]")}
          dangerouslySetInnerHTML={{ __html: label }}
        />

        <div
          className={clsx(
            "grid w-full grid-flow-col grid-cols-[1fr_auto] content-center items-center justify-between justify-items-start gap-x-[0.5rem]",
            "rounded-[0.5rem] px-[1rem] py-[0.75rem] outline-0",
            "bg-white",
            focus
              ? "border border-tufts-blue drop-shadow-[0px_-1px_8px_#D6EDFF]"
              : "border border-cadet-grey"
          )}
        >
          <input
            className={clsx(
              "w-full outline-0",
              "bg-white",
              "text-sm leading-[normal] text-charleston-green placeholder:text-[rgba(154,168,184,1)]"
            )}
            type={inputType}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChangePassword}
            {...otherProps}
          />

          {show ? (
            <button>
              <EyeSlashIcon
                className={clsx("h-[1.25rem] w-[1.25rem]", "text-[#697584]")}
                onClick={handleHidePassword}
              />
            </button>
          ) : (
            <button>
              <EyeIcon
                className={clsx("h-[1.25rem] w-[1.25rem]", "text-[#697584]")}
                onClick={handleShowPassword}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

import * as React from "react";
import clsx from "clsx";

export interface ITextfieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Textfield = ({ label = "", ...otherProps }: ITextfieldProps) => {
  return (
    <div
      className={clsx(
        "grid",
        "w-full",
        "grid-cols-1 place-content-start place-items-start",
        label ? "gap-y-[0.75rem]" : "gap-y-[0rem]"
      )}
    >
      <label
        className={clsx("text-sm leading-[normal] text-[rgba(35,41,49,1)]")}
      >
        {label}
      </label>

      <input
        className={clsx(
          "w-full",
          "rounded-[0.5rem] border border-cadet-grey px-[1rem] py-[0.75rem] outline-0",
          "focus:border-tufts-blue focus:drop-shadow-[0px_-1px_8px_#D6EDFF]",
          "text-sm leading-[normal] text-charleston-green placeholder:text-[rgba(154,168,184,1)]"
        )}
        {...otherProps}
      />
    </div>
  );
};

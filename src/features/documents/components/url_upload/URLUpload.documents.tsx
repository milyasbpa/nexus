import * as React from "react";
import clsx from "clsx";
import { Checkbox, CheckboxProps } from "@/core/components/checkbox";
import { ITextfieldProps, Textfield } from "@/core/components/textfield";

export interface URLUploadDocumentsProps {
  message?: string;
  setting?: {
    label: string;
    checkbox: CheckboxProps;
  };
  input?: ITextfieldProps;
  actions?: {
    primary: {
      text: string;
    };
    secondary: {
      text: string;
    };
  };
  onUpload?: () => void;
  onCancel?: () => void;
}

export const URLUploadDocuments = ({
  message = "",
  setting,
  input,
  actions = {
    primary: {
      text: "",
    },
    secondary: {
      text: "",
    },
  },
  onCancel,
  onUpload,
}: URLUploadDocumentsProps) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
        "w-full"
      )}
    >
      <p
        className={clsx(
          "text-[0.875rem] text-[#232931] font-light font-plusJakartaSans"
        )}
      >
        {message}
      </p>

      <Textfield {...input} />

      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
          "w-full"
        )}
      >
        <p
          className={clsx(
            "text-[0.875rem] text-[#232931] font-light font-plusJakartaSans"
          )}
        >
          {setting?.label}
        </p>
        <Checkbox {...setting?.checkbox} />
      </div>

      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-end justify-items-end gap-[0.5rem]",
          "w-full"
        )}
      >
        <button
          className={clsx(
            "w-[88px] h-[2rem]",
            "bg-white",
            "rounded-[0.375rem]",
            "text-[#FC5959] text-[0.75rem] font-semibold font-plusJakartaSans"
          )}
          onClick={onCancel}
        >
          {actions.secondary.text}
        </button>
        <button
          className={clsx(
            "w-[88px] h-[2rem]",
            "bg-[#232931] disabled:bg-[#EBF3FA]",
            "rounded-[0.375rem]",
            "text-[white] text-[0.75rem] font-semibold font-plusJakartaSans"
          )}
          disabled={!input || !String(input?.value)?.length}
          onClick={onUpload}
        >
          {actions.primary.text}
        </button>
      </div>
    </div>
  );
};

import * as React from "react";
import clsx from "clsx";
import { Checkbox, CheckboxProps } from "@/core/components/checkbox";
import {
  DragnDropFileInputDocuments,
  DragnDropFileInputDocumentsProps,
} from "../drag_n_drop_file_input/DragnDropFileInput.documents";
import {
  DragnDropFilePreviewDocuments,
  DragnDropFilePreviewDocumentsProps,
} from "../drag_n_drop_file_preview";

export interface DragnDropUploadDocumentsProps {
  message?: string;
  setting?: {
    label: string;
    checkbox: CheckboxProps;
  };
  preview?: DragnDropFilePreviewDocumentsProps;
  input?: DragnDropFileInputDocumentsProps;
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

export const DragnDropUploadDocuments = ({
  message = "",
  setting,
  preview,
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
}: DragnDropUploadDocumentsProps) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
        "w-full"
      )}
    >
      <p className={clsx("text-[0.875rem] text-[#232931] font-light")}>
        {message}
      </p>

      {typeof preview?.name !== "undefined" && preview.name.length > 0 ? (
        <DragnDropFilePreviewDocuments {...preview} />
      ) : (
        <DragnDropFileInputDocuments {...input} />
      )}

      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
          "w-full"
        )}
      >
        <p className={clsx("text-[0.875rem] text-[#232931] font-light")}>
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
            "text-[#FC5959] text-[0.75rem] font-semibold"
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
            "text-[white] text-[0.75rem] font-semibold"
          )}
          disabled={!preview?.name?.length}
          onClick={onUpload}
        >
          {actions.primary.text}
        </button>
      </div>
    </div>
  );
};

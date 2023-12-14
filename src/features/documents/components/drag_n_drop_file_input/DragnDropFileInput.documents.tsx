"use client";
import * as React from "react";
import clsx from "clsx";

export interface DragnDropFileInputDocumentsProps {
  message?: string;
  actions?: string;
  description?: string;
  accept?: string;
  onUpload?: (data: FileList) => void;
}

export const DragnDropFileInputDocuments = ({
  message = "",
  actions = "",
  description = "",
  accept = "",
  onUpload,
}: DragnDropFileInputDocumentsProps) => {
  const inputText = message.replace(
    "{{actions}}",
    `<button id="browse-button" style="color:#005CFF;font-size:0.875rem;font-weight:500;text-decoration:underline;">${actions}</button>`
  );

  const inputRef = React.useRef<HTMLInputElement>(null);
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleChangeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.currentTarget.files !== null) {
      if (onUpload) {
        onUpload(e.currentTarget.files);
      }

      e.preventDefault();
      e.stopPropagation();
    }

    e.target.value = "";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (e.dataTransfer.files !== null) {
      // if not contain max file size uploading
      if (onUpload) {
        onUpload(e.dataTransfer.files);
      }
      e.preventDefault();
    }
  };

  const handleClickUpload = () => {
    inputRef?.current?.click();
  };

  const handleButtonListener = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    handleClickUpload();
  };

  React.useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const button = document.getElementById("browse-button");
      if (button !== null) {
        button.addEventListener("click", handleButtonListener);
        return () => {
          button.removeEventListener("click", handleButtonListener);
        };
      }
    }
  }, []);

  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-center place-items-center gap-y-[0.5rem]",
        "min-h-[184px]",
        "border-[#BFCAD7] border",
        "w-full",
        "rounded-[0.5rem]",
        "p-[1.75rem]"
      )}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        id="`inputFile`"
        className={clsx("sr-only")}
        accept={accept}
        onChange={handleChangeUpload}
      />

      <div
        className={clsx(
          "grid grid-cols-1 place-content-center place-items-center gap-y-[0.25rem]"
        )}
      >
        <p
          className={clsx(
            "text-[#404852]",
            "text-center text-[1rem] font-medium"
          )}
          dangerouslySetInnerHTML={{ __html: inputText }}
        />

        <p
          className={clsx(
            "whitespace-pre-line text-center text-[0.75rem] font-normal text-[#697584]"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

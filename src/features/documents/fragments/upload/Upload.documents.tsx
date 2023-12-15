"use client";
import React from "react";
import { Dialog } from "@headlessui/react";
import { ModalComponent } from "@/core/components/modal";
import { XMarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { getDictionaries } from "../../i18";
import UploadTabsDocuments from "../../components/upload_tab/UploadTab.documents";
import { URLUploadDocuments } from "../../components/url_upload";
import { useFormContext } from "react-hook-form";
import { DocumentsForm } from "../../react_hook_form/keys";
import { PlusSmallIcon } from "@heroicons/react/20/solid";
import { plusJakartaSans } from "@/core/fonts";
import { DragnDropUploadDocuments } from "../../components/drag_n_drop";

export const UploadDocuments = () => {
  const { watch, setValue } = useFormContext<DocumentsForm>();
  const dictionaries = getDictionaries("en");

  const handleOpenModal = () => {
    setValue(dictionaries.upload.dialog.browse.input.name, null);
    setValue(dictionaries.upload.dialog.browse.preview.name, "");
    setValue(dictionaries.upload.dialog.url.input.name, "");
    setValue(dictionaries.upload.dialog.name, true);
  };

  const handleCloseModal = () => {
    setValue(dictionaries.upload.dialog.name, false);
    setValue(
      dictionaries.upload.dialog.tab.name,
      dictionaries.upload.dialog.tab.data[0].id
    );
  };

  const handleSelectTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue(dictionaries.upload.dialog.tab.name, e.currentTarget.value);
  };

  const handleChangePrivateDocumentDragnDropUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(e.currentTarget.name, !watch(e.currentTarget.name));
  };
  const handleChangeDragnDropUpload = (data: FileList) => {
    const name = Array.from(data)
      .map((item) => item.name)
      .find((_, index) => index === 0) as string;
    setValue(dictionaries.upload.dialog.browse.input.name, data);
    setValue(dictionaries.upload.dialog.browse.preview.name, name);
  };
  const handleRemoveDragnDropFileInput = () => {
    setValue(dictionaries.upload.dialog.browse.input.name, null);
    setValue(dictionaries.upload.dialog.browse.preview.name, "");
  };
  const handleUploadDragnDropUpload = () => {
    setValue(dictionaries.upload.pesona_dialog.name, true);
    setValue(dictionaries.upload.dialog.name, false);
  };
  const handleCancelDragnDropUpload = () => {
    setValue(dictionaries.upload.dialog.name, false);
    setValue(
      dictionaries.upload.dialog.tab.name,
      dictionaries.upload.dialog.tab.data[0].id
    );
  };

  const handleChangeURLFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.name, e.currentTarget.value);
  };
  const handleChangePrivateDocumentURLUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(e.currentTarget.name, !watch(e.currentTarget.name));
  };
  const handleUploadURLUpload = () => {
    setValue(dictionaries.upload.dialog.name, false);
    setValue(dictionaries.upload.pesona_dialog.name, true);
  };
  const handleCancelURLUpload = () => {
    setValue(dictionaries.upload.dialog.name, false);
    setValue(
      dictionaries.upload.dialog.tab.name,
      dictionaries.upload.dialog.tab.data[0].id
    );
  };

  return (
    <>
      <button
        className={clsx(
          "grid grid-flow-col items-center content-center justify-center justify-items-center gap-[0.5rem]",
          "rounded-[0.25rem]",
          "px-[1rem] py-[0.625rem]",
          "bg-[#232931]",
          "text-[1rem] text-[white] font-semibold",
          plusJakartaSans.className
        )}
        onClick={handleOpenModal}
      >
        <div
          className={clsx(
            "w-[1.5rem] h-[1.5rem]",
            "bg-white",
            "rounded-[50%]",
            "relative"
          )}
        >
          <PlusSmallIcon
            className={clsx("text-[#232931]", "w-[1.5rem] h-[1.5rem]")}
          />
        </div>

        {dictionaries.upload.button.placeholder}
      </button>

      <ModalComponent
        isOpen={watch(dictionaries.upload.dialog.name)}
        onClose={handleCloseModal}
      >
        <Dialog.Panel
          className={clsx(
            "grid grid-flow-row h-fit w-fit max-w-[432px] min-w-[432px] transform overflow-y-visible overflow-x-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all gap-y-[2rem]"
          )}
        >
          <div
            className={clsx(
              "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
              "w-full"
            )}
          >
            <div
              className={clsx("flex items-center justify-between", "w-full")}
            >
              <Dialog.Title
                as="h3"
                className={clsx("text-[1.125rem] font-semibold text-[#232931]")}
              >
                {dictionaries.upload.dialog.title}
              </Dialog.Title>
              <XMarkIcon
                className={clsx(
                  "w-[1.5rem] h-[1.5rem]",
                  "text-auro-metal-saurus",
                  "cursor-pointer"
                )}
                onClick={handleCloseModal}
              />
            </div>

            {/* tabs */}
            <UploadTabsDocuments
              active={watch(dictionaries.upload.dialog.tab.name)}
              items={dictionaries.upload.dialog.tab.data}
              onClick={handleSelectTab}
            />

            {watch(dictionaries.upload.dialog.tab.name) === "drag_and_drop" ? (
              <DragnDropUploadDocuments
                message={dictionaries.upload.dialog.browse.description}
                preview={{
                  name: watch(dictionaries.upload.dialog.browse.preview.name),
                  actions: dictionaries.upload.dialog.browse.preview.actions,
                  onRemove: handleRemoveDragnDropFileInput,
                }}
                input={{
                  message: dictionaries.upload.dialog.browse.input.message,
                  description:
                    dictionaries.upload.dialog.browse.input.description,
                  actions: dictionaries.upload.dialog.browse.input.actions,
                  onUpload: handleChangeDragnDropUpload,
                }}
                setting={{
                  label: dictionaries.upload.dialog.browse.setting.label,
                  checkbox: {
                    label:
                      dictionaries.upload.dialog.browse.setting.input
                        .private_document.label,
                    checked: watch(
                      dictionaries.upload.dialog.browse.setting.input
                        .private_document.name
                    ),
                    name: dictionaries.upload.dialog.browse.setting.input
                      .private_document.name,
                    onChange: handleChangePrivateDocumentDragnDropUpload,
                  },
                }}
                actions={dictionaries.upload.dialog.url.actions}
                onUpload={handleUploadDragnDropUpload}
                onCancel={handleCancelDragnDropUpload}
              />
            ) : (
              <URLUploadDocuments
                message={dictionaries.upload.dialog.url.description}
                input={{
                  name: dictionaries.upload.dialog.url.input.name,
                  placeholder: dictionaries.upload.dialog.url.input.placeholder,
                  value: watch(dictionaries.upload.dialog.url.input.name),
                  onChange: handleChangeURLFileInput,
                }}
                setting={{
                  label: dictionaries.upload.dialog.url.setting.label,
                  checkbox: {
                    label:
                      dictionaries.upload.dialog.url.setting.input
                        .private_document.label,
                    checked: watch(
                      dictionaries.upload.dialog.url.setting.input
                        .private_document.name
                    ),
                    name: dictionaries.upload.dialog.url.setting.input
                      .private_document.name,
                    onChange: handleChangePrivateDocumentURLUpload,
                  },
                }}
                actions={dictionaries.upload.dialog.url.actions}
                onUpload={handleUploadURLUpload}
                onCancel={handleCancelURLUpload}
              />
            )}
          </div>
        </Dialog.Panel>
      </ModalComponent>
    </>
  );
};

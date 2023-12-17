import { ModalComponent } from "@/core/components/modal";
import { Dialog } from "@headlessui/react";
import * as React from "react";
import clsx from "clsx";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useFormContext } from "react-hook-form";
import { DocumentsForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";

export const KickstartDocuments = () => {
  const { watch, setValue } = useFormContext<DocumentsForm>();
  const dictionaries = getDictionaries("en");

  const handleCloseModal = () => {
    setValue(dictionaries.kickstart.name, false);
  };

  const handleClickGetStarted = () => {
    setValue(dictionaries.kickstart.name, false);
  };
  return (
    <ModalComponent
      isOpen={watch(dictionaries.kickstart.name)}
      onClose={handleCloseModal}
    >
      <Dialog.Panel
        className={clsx(
          "grid grid-flow-row h-fit w-fit max-w-[452px] min-w-[432px] transform overflow-y-visible overflow-x-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all gap-y-[2.5rem]"
        )}
      >
        <div
          className={clsx(
            "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
            "w-full"
          )}
        >
          <div className={clsx("flex items-center justify-between", "w-full")}>
            <Dialog.Title
              as="h3"
              className={clsx(
                "text-[1.125rem] font-semibold text-[#232931] font-plusJakartaSans"
              )}
            >
              {dictionaries.kickstart.title}
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

          <div
            className={clsx(
              "grid grid-cols-1 place-content-start place-items-start",
              "w-full",
              "px-[1.875rem] py-[1.5rem]",
              "bg-[#F4F8FC]",
              "border border-[#BFCAD7]",
              "rounded-[0.25rem]"
            )}
          >
            <img
              src={"/images/kickstart/kickstart.png"}
              className={clsx("w-full")}
            />
          </div>

          <p
            className={clsx(
              "text-[0.875rem] text-[#232931] font-plusJakartaSans font-medium"
            )}
          >
            {dictionaries.kickstart.message}
          </p>
        </div>
        <button
          className={clsx(
            "flex items-center justify-center",
            "w-full",
            "px-[0.75rem] py-[0.75rem]",
            "bg-[#002566]",
            "rounded-[0.375rem]",
            "text-[#EBF3FA] text-[0.875rem] font-plusJakartaSans font-medium"
          )}
          onClick={handleClickGetStarted}
        >
          {dictionaries.kickstart.actions.primary}
        </button>
      </Dialog.Panel>
    </ModalComponent>
  );
};

import * as React from "react";
import { useFormContext } from "react-hook-form";
import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import { DocumentsForm } from "../../react_hook_form/keys";
import { ModalComponent } from "@/core/components/modal";
import { getDictionaries } from "../../i18";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { AgentSelectorCardDocuments } from "../../components/agent_selector_card";
import { useDocumentsSetChatStorage } from "../../react_query/hooks/useSetChatStorage.documents";
import { queryClient } from "@/core/config/react_query";
import { DocumentsReactQueryKey } from "../../react_query/keys";
import { UserStorageInterface } from "@/core/models/storage";

export const PesonaDocuments = () => {
  const { watch, setValue } = useFormContext<DocumentsForm>();
  const dictionaries = getDictionaries("en");

  const { mutate: setChatStorage } = useDocumentsSetChatStorage();

  const userStorageData = queryClient.getQueryData(
    DocumentsReactQueryKey.GetUserStorage()
  ) as undefined | UserStorageInterface;
  const handleCloseModal = () => {
    setValue(dictionaries.upload.pesona_dialog.name, false);
  };
  const handleCancel = () => {
    setValue(dictionaries.upload.dialog.browse.input.name, null);
    setValue(dictionaries.upload.dialog.browse.preview.name, "");
    setValue(dictionaries.upload.pesona_dialog.name, false);
    setValue(dictionaries.upload.pesona_dialog.input.name, null);
  };

  const handleClickAgentSelector = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue(
      dictionaries.upload.pesona_dialog.input.name,
      e.currentTarget.value
    );
  };
  const handleUpload = () => {
    setChatStorage();
  };

  const dialogTitle = !userStorageData
    ? dictionaries.upload.dialog.title.replace("{{name}}", "")
    : dictionaries.upload.dialog.title.replace(
        "{{name}}",
        userStorageData.email
      );

  return (
    <ModalComponent
      isOpen={watch(dictionaries.upload.pesona_dialog.name)}
      onClose={handleCloseModal}
    >
      <Dialog.Panel
        className={clsx(
          "grid grid-flow-row h-fit w-fit max-w-[80vw] min-w-[432px] transform overflow-y-visible overflow-x-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all gap-y-[2rem]"
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
              className={clsx("text-[1.125rem] font-semibold text-[#232931]")}
            >
              {dialogTitle}
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
              "grid grid-cols-1 place-content-start place-items-start gap-[3rem]",
              "w-full"
            )}
          >
            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-[2rem]",
                "w-full"
              )}
            >
              <p
                className={clsx("text-[#232931] text-[1.125rem] font-semibold")}
              >
                {dictionaries.upload.pesona_dialog.title}
              </p>

              <div
                className={clsx(
                  "grid grid-cols-1 lg:grid-cols-3 place-content-start place-items-start gap-[1.5rem]",
                  "w-full"
                )}
              >
                {dictionaries.upload.pesona_dialog.data.map((agent) => (
                  <AgentSelectorCardDocuments
                    key={agent.id}
                    id={agent.id}
                    name={agent.name}
                    selected={
                      watch(dictionaries.upload.pesona_dialog.input.name) ===
                      agent.id
                    }
                    description={agent.description}
                    image={agent.image}
                    onClick={handleClickAgentSelector}
                  />
                ))}
              </div>
            </div>

            {/* actions */}
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
                onClick={handleCancel}
              >
                {dictionaries.upload.pesona_dialog.actions.secondary.text}
              </button>
              <button
                className={clsx(
                  "w-[88px] h-[2rem]",
                  "bg-[#232931] disabled:bg-[#EBF3FA]",
                  "rounded-[0.375rem]",
                  "text-[white] text-[0.75rem] font-semibold"
                )}
                disabled={!watch(dictionaries.upload.pesona_dialog.input.name)}
                onClick={handleUpload}
              >
                {dictionaries.upload.pesona_dialog.actions.primary.text}
              </button>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </ModalComponent>
  );
};

import * as React from "react";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import { ChatForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";
import { PersonaDropdownChat } from "../../components/persona_dropdown";
import { queryClient } from "@/core/config/react_query";
import { ChatReactQueryKey } from "../../react_query/keys";
import { UserStorageInterface } from "@/core/models/storage";
import { useChatSetChatStorage } from "../../react_query/hooks/useSetChatStorage.chat";

export const PersonaChat = () => {
  const { watch, setValue } = useFormContext<ChatForm>();
  const dictionaries = getDictionaries("en");

  const { mutate: setChatStorage } = useChatSetChatStorage();

  const name = watch(dictionaries.conversation.persona.name)?.name ?? "";
  const initial = name.split(" ").reduce((acc: any, value: string) => {
    const firstChar = value.charAt(0);
    return `${acc}${firstChar}`;
  }, "");

  const handleClickSelectPersona = (e: React.MouseEvent<HTMLButtonElement>) => {
    const userStorageData = queryClient.getQueryData(
      ChatReactQueryKey.GetUserStorage()
    ) as undefined | UserStorageInterface;
    const selectedPersona =
      dictionaries.conversation.persona.data.find(
        (item) => item.id === e.currentTarget.value
      ) ?? null;
    setValue(dictionaries.conversation.persona.name, selectedPersona);

    if (!selectedPersona) return;
    setChatStorage();

    if (!userStorageData) return;

    setValue(dictionaries.conversation.history.name, [
      ...watch(dictionaries.conversation.history.name),
      {
        message:
          selectedPersona.id === "FINANCIAL_CONSULTANT"
            ? dictionaries.conversation.history.greeting.template.financial_analyst.message.replace(
                "{{name}}",
                userStorageData.email ?? ""
              )
            : selectedPersona.id === "LEGAL_CONSULTANT"
            ? dictionaries.conversation.history.greeting.template.legal_consultant.message.replace(
                "{{name}}",
                userStorageData.email ?? ""
              )
            : dictionaries.conversation.history.greeting.template.general.message.replace(
                "{{name}}",
                userStorageData.email ?? ""
              ),
        user: selectedPersona.name,
        initial: selectedPersona.name
          .split(" ")
          .reduce((acc: any, value: string) => {
            const firstChar = value.charAt(0);
            return `${acc}${firstChar}`;
          }, ""),
      },
    ]);
  };

  return (
    <div
      className={clsx(
        "absolute top-0 left-0 right-0",
        "px-[1rem] py-[1rem]",
        "grid grid-flow-col items-center content-center justify-between justify-items-start",
        "w-full",
        "bg-white"
      )}
    >
      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]",
          "w-full"
        )}
      >
        <div
          className={clsx(
            "bg-[#244E46]",
            "rounded-[0.25rem]",
            "w-[1.75rem] h-[1.75rem]",
            "flex items-center justify-center",
            "text-[0.875rem] font-medium text-[white] font-libreBaskerville"
          )}
        >
          {initial}
        </div>
        <p className={clsx("teext-[0.875rem] text-[#232931] font-medium")}>
          {name}
        </p>
      </div>

      <PersonaDropdownChat
        selected={watch(dictionaries.conversation.persona.name)}
        items={dictionaries.conversation.persona.data}
        onClickSelect={handleClickSelectPersona}
      />
    </div>
  );
};

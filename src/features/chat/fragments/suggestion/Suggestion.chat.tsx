"use client";
import * as React from "react";
import clsx from "clsx";
import { useChatGetChatSuggestionNexus } from "../../react_query/hooks/useGetChatSuggestionNexus.chat";
import { useFormContext } from "react-hook-form";
import { ChatForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";
import { useChatDeleteClearChatNexus } from "../../react_query/hooks/useDeleteClearChatNexus.chat";
import { useChatPostSendChatNexus } from "../../react_query/hooks/usePostSendChatNexus.chat";

export const SuggestionChat = () => {
  const { watch, setValue } = useFormContext<ChatForm>();
  const dictionaries = getDictionaries("en");
  useChatGetChatSuggestionNexus();
  const { mutate: deleteClearChatNexus } = useChatDeleteClearChatNexus();
  const { mutate: postSendChatNexus } = useChatPostSendChatNexus();

  const items = watch(dictionaries.conversation.suggestion.message.name);

  const handleSelectSuggestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue(dictionaries.conversation.question.name, e.currentTarget.value);
    postSendChatNexus();
    setValue(dictionaries.conversation.history.name, [
      ...watch(dictionaries.conversation.history.name),
      {
        message: e.currentTarget.value,
        user: "USER",
        initial: "",
      },
    ]);
    setValue(dictionaries.conversation.suggestion.name, false);
    setValue(dictionaries.conversation.keyboard.input.name, "");
  };

  const handleClickClearChat = () => {
    deleteClearChatNexus();
  };

  return (
    <div
      className={clsx(
        watch(dictionaries.conversation.suggestion.name) ? "grid" : "hidden",
        "grid-cols-1 items-center content-center justify-start justify-items-start gap-[0.5rem]",
        "w-full",
        "px-[0.75rem] py-[1rem]",
        "bg-[white]",
        "absolute",
        "bottom-[76px] right-0 left-0",
        "border border-[#BFCAD7]"
      )}
    >
      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-items-start justify-between",
          "w-full"
        )}
      >
        <p className={clsx("text-[1.125rem] font-medium text-[#002566]")}>
          {dictionaries.conversation.suggestion.title}
        </p>

        <div
          className={clsx(
            "grid grid-flow-col items-center content-center justify-end justify-items-end gap-[0.5rem]"
          )}
        >
          <button onClick={handleClickClearChat}>
            <img
              src={"/icons/chat/trash.svg"}
              className={clsx("w-[1.5rem] h-[1.5rem]")}
            />
          </button>
        </div>
      </div>

      <div
        className={clsx(
          "grid place-content-start place-items-start gap-[1rem]",
          "w-full"
        )}
        style={{ gridTemplateColumns: `repeat(${items.length},1fr)` }}
      >
        {items?.map((item: any, itemIndex: number) => (
          <div
            key={itemIndex}
            className={clsx(
              "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
              "w-full",
              "px-[0.5rem] py-[1rem]",
              "bg-[#F4F8FC]",
              "rounded-[0.25rem]"
            )}
          >
            <p className={clsx("text-[1rem] font-semibold text-[#002566]")}>
              {item.category}
            </p>
            {item.data.map((childItem: any, childItemIndex: number) => (
              <button
                key={childItemIndex}
                className={clsx(
                  "grid grid-cols-1 place-content-start place-items-start",
                  "w-full",
                  "bg-white",
                  "rounded-[0.5rem]",
                  "px-[0.5rem] py-[0.5rem]"
                )}
                value={childItem.message}
                onClick={handleSelectSuggestion}
              >
                <p
                  className={clsx("text-[0.875rem] font-normal text-[#404852]")}
                >
                  {childItem.message}
                </p>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

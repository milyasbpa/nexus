"use client";
import { ArrowUpIcon } from "@heroicons/react/20/solid";
import * as React from "react";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import { ChatForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";

export const KeyboardChat = () => {
  const { watch, setValue } = useFormContext<ChatForm>();
  const dictionaries = getDictionaries("en");

  const handleClickHint = () => {
    setValue(
      dictionaries.conversation.suggestion.name,
      !watch(dictionaries.conversation.suggestion.name)
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(
      dictionaries.conversation.keyboard.input.name,
      e.currentTarget.value
    );
  };

  const handleKeyDownEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setValue(dictionaries.conversation.history.name, [
        ...watch(dictionaries.conversation.history.name),
        {
          message: watch(dictionaries.conversation.keyboard.input.name),
          user: "USER",
          initial: "",
        },
      ]);
      setValue(dictionaries.conversation.suggestion.name, false);
      setValue(dictionaries.conversation.keyboard.input.name, "");
    }
  };

  const handleClickEnter = () => {
    setValue(dictionaries.conversation.history.name, [
      ...watch(dictionaries.conversation.history.name),
      {
        message: watch(dictionaries.conversation.keyboard.input.name),
        user: "USER",
        initial: "",
      },
    ]);
    setValue(dictionaries.conversation.suggestion.name, false);
    setValue(dictionaries.conversation.keyboard.input.name, "");
  };

  return (
    <div
      className={clsx(
        "grid grid-cols-[auto_1fr] items-center content-center justify-start justify-items-start gap-[0.5rem]",
        "w-full",
        "p-[1rem]",
        "bg-[#9AA8B8]",
        "absolute",
        "bottom-0 right-0 left-0"
      )}
    >
      <button onClick={handleClickHint}>
        <img
          src={"/icons/chat/hint.svg"}
          className={clsx("w-[1.5rem] h-[1.5rem]")}
        />
      </button>
      <div
        className={clsx(
          "grid grid-cols-[1fr_auto] items-center content-center justify-start justify-items-start",
          "w-full",
          "bg-white",
          "px-[0.5rem] py-[0.75rem]",
          "rounded-[0.25rem]"
        )}
      >
        <input
          className={clsx(
            "w-full",
            "placeholder:text-[1rem] placeholder:font-normal placeholder:text-[#697584]",
            "text-[1rem] font-normal text-[#232931]",
            "outline-none"
          )}
          value={watch(dictionaries.conversation.keyboard.input.name)}
          placeholder={"Type your question"}
          onChange={handleChange}
          onKeyDown={handleKeyDownEnter}
        />
        <button
          className={clsx("bg-[#002566]", "rounded-[0.25rem]")}
          onClick={handleClickEnter}
        >
          <ArrowUpIcon
            className={clsx("w-[1.25rem] h-[1.25rem]", "text-white")}
          />
        </button>
      </div>
    </div>
  );
};

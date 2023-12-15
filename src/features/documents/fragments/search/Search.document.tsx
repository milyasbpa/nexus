'use client'
import * as React from "react";
import clsx from "clsx";
import { Textfield } from "@/core/components/textfield";
import { getDictionaries } from "../../i18";
import { useFormContext } from "react-hook-form";
import { DocumentsForm } from "../../react_hook_form/keys";

export const SearchDocuments = () => {
  const dictionaries = getDictionaries("en");
  const { watch, setValue } = useFormContext<DocumentsForm>();

  const handleChangeSearchName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(dictionaries.data_table.search.input.name, e.currentTarget.value);
  };
  return (
    <div className={clsx("w-full max-w-[250px]")}>
      <Textfield
        name={dictionaries.data_table.search.input.name}
        placeholder={dictionaries.data_table.search.input.placeholder}
        value={watch(dictionaries.data_table.search.input.name)}
        onChange={handleChangeSearchName}
      />
    </div>
  );
};

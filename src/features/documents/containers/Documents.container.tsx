"use client";
import { DashboardContainer } from "@/core/modules/dashboard/containers";
import * as React from "react";
import clsx from "clsx";
import { Textfield } from "@/core/components/textfield";
import { getDictionaries } from "../i18";
import { plusJakartaSans } from "@/core/fonts";
import {
  MagnifyingGlassCircleIcon,
  PlusSmallIcon,
} from "@heroicons/react/20/solid";
import { DataTableDocuments } from "../fragments/data_table/DataTable.documents";
import { FormProvider, useForm } from "react-hook-form";

export const DocumentsContainer = () => {
  const methods = useForm();
  const dictionaries = getDictionaries("en");

  return (
    <FormProvider {...methods}>
      <DashboardContainer>
        <div
          className={clsx(
            "grid grid-cols-1 items-start content-start justify-center justify-items-center",
            "w-full",
            "pt-[3rem]"
          )}
        >
          <div
            className={clsx(
              "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
              "max-w-[1000px] w-full"
            )}
          >
            <h1 className={clsx("text-[1.5rem] font-medium text-[#232931]")}>
              {dictionaries.title}
            </h1>
            <div
              className={clsx("flex items-center justify-between", "w-full")}
            >
              <div className={clsx("w-full max-w-[250px]")}>
                <Textfield
                  name={dictionaries.data_table.search.input.name}
                  placeholder={dictionaries.data_table.search.input.placeholder}
                />
              </div>

              <button
                className={clsx(
                  "grid grid-flow-col items-center content-center justify-center justify-items-center gap-[0.5rem]",
                  "rounded-[0.25rem]",
                  "px-[1rem] py-[0.625rem]",
                  "bg-[#232931]",
                  "text-[1rem] text-[white] font-semibold",
                  plusJakartaSans.className
                )}
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
            </div>

            <DataTableDocuments />
          </div>
        </div>
      </DashboardContainer>
    </FormProvider>
  );
};

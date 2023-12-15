"use client";
import { DashboardContainer } from "@/core/modules/dashboard/containers";
import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../i18";
import { DataTableDocuments } from "../fragments/data_table/DataTable.documents";
import { FormProvider, useForm } from "react-hook-form";
import { UploadDocuments } from "../fragments/upload";
import { defaultValues } from "../react_hook_form/constants/default_values";
import { PesonaDocuments } from "../fragments/pesona";
import { SearchDocuments } from "../fragments/search";
import { useDocumentsGetUserStorage } from "../react_query/hooks/useGetUserStorage.document";

export const DocumentsContainer = () => {
  useDocumentsGetUserStorage();
  const methods = useForm({
    defaultValues: defaultValues,
  });
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
              <SearchDocuments />

              <UploadDocuments />
              <PesonaDocuments />
            </div>

            <DataTableDocuments />
          </div>
        </div>
      </DashboardContainer>
    </FormProvider>
  );
};

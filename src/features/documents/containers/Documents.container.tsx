"use client";
import { DashboardContainer } from "@/core/modules/dashboard/containers";
import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../i18";
import { DataTableDocuments } from "../fragments/data_table/DataTable.documents";
import { UploadDocuments } from "../fragments/upload";
import { PesonaDocuments } from "../fragments/pesona";
import { SearchDocuments } from "../fragments/search";
import { useDocumentsGetUserStorage } from "../react_query/hooks/useGetUserStorage.documents";
import { KickstartDocuments } from "../fragments/kickstart";

export const DocumentsContainer = () => {
  useDocumentsGetUserStorage();

  const dictionaries = getDictionaries("en");

  return (
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
          <h1
            className={clsx(
              "text-[1.5rem] font-medium text-[#232931] font-plusJakartaSans"
            )}
          >
            {dictionaries.title}
          </h1>
          <div className={clsx("flex items-center justify-between", "w-full")}>
            <SearchDocuments />

            <UploadDocuments />
            <PesonaDocuments />
          </div>

          <DataTableDocuments />
        </div>
      </div>
      <KickstartDocuments />
    </DashboardContainer>
  );
};

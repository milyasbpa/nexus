"use client";
import * as React from "react";
import clsx from "clsx";
import { useChatGetFileWeb } from "../../react_query/hooks/useGetFileWeb.chat";
import { useFormContext } from "react-hook-form";
import { ChatForm } from "../../react_hook_form/keys";
import {
  RenderCurrentScaleProps,
  RenderZoomInProps,
  RenderZoomOutProps,
  zoomPlugin,
} from "@react-pdf-viewer/zoom";
import { getDictionaries } from "../../i18";
import {
  DocumentLoadEvent,
  PageChangeEvent,
  RotateDirection,
} from "@react-pdf-viewer/core";
import { RenderRotateProps, rotatePlugin } from "@react-pdf-viewer/rotate";
import { PDFViewerUpload } from "../../components/pdf_viewer";

export const DocumentChat = () => {
  const { watch, setValue } = useFormContext<ChatForm>();
  const dictionaries = getDictionaries("en");
  useChatGetFileWeb();

  const zoomPluginInstance = zoomPlugin();
  const { ZoomIn, ZoomOut, CurrentScale } = zoomPluginInstance;

  const rotatePluginInstance = rotatePlugin();
  const { Rotate } = rotatePluginInstance;

  const header = watch(dictionaries.pdf.header.name) as {
    name: string;
    current_page: number;
    total_page: number;
  };

  const handleDocumentLoad = (e: DocumentLoadEvent) => {
    setValue(dictionaries.pdf.header.name, {
      ...watch(dictionaries.pdf.header.name),
      total_page: e.doc.numPages,
    });
  };

  const handlePageChanges = (e: PageChangeEvent) => {
    setValue(dictionaries.pdf.header.name, {
      ...watch(dictionaries.pdf.header.name),
      current_page: e.currentPage + 1,
    });
  };

  return (
    <div className={clsx("w-full")}>
      {/* header */}
      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-items-start justify-between",
          "w-full h-[58px]",
          "px-[1rem]",
          "bg-[#697584]",
          "max-h-[58px]"
        )}
      >
        <div
          className={clsx(
            "grid grid-cols-1 place-content-start place-items-start gap-[0.25rem]"
          )}
        >
          <p className={clsx("text-[0.875rem] font-medium text-white")}>
            {header.name.replace(".pdf", "").length > 10
              ? `${header.name.slice(0, 10)}... .pdf`
              : `${header.name}`}
          </p>
          <div
            className={clsx(
              "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.25rem]"
            )}
          >
            <div
              className={clsx(
                "w-[1.25rem] h-[1.25rem]",
                "bg-white",
                "rounded-[0.25rem]",
                "flex items-center justify-center",
                "text-[0.75rem] font-light text-[#404852]"
              )}
            >
              {header.current_page}
            </div>
            <p
              className={clsx("text-[0.75rem] font-light text-white")}
            >{`of ${header.total_page} page`}</p>
          </div>
        </div>

        <div
          className={clsx(
            "grid grid-flow-col items-center content-center justify-center justify-items-center gap-[0.5rem]"
          )}
        >
          <ZoomOut>
            {(props: RenderZoomOutProps) => (
              <button onClick={props.onClick}>
                <img
                  src={"/icons/chat/zoom_out.svg"}
                  className={clsx("w-[1.5rem] h-[1.5rem]")}
                />
              </button>
            )}
          </ZoomOut>

          <CurrentScale>
            {(props: RenderCurrentScaleProps) => (
              <p className={clsx("text-[1rem] font-normal text-[#F4F8FC]")}>
                {`${Math.round(props.scale * 100)}%`}
              </p>
            )}
          </CurrentScale>

          <ZoomIn>
            {(props: RenderZoomInProps) => (
              <button onClick={props.onClick}>
                <img
                  src={"/icons/chat/zoom_in.svg"}
                  className={clsx("w-[1.5rem] h-[1.5rem]")}
                />
              </button>
            )}
          </ZoomIn>
        </div>

        <div
          className={clsx(
            "grid grid-flow-col items-center content-center justify-end justify-items-end gap-[0.5rem]",
            "w-full"
          )}
        >
          <button>
            <img
              src={"/icons/chat/split_page.svg"}
              className={clsx("w-[1.5rem] h-[1.5rem]")}
            />
          </button>
          <Rotate direction={RotateDirection.Backward}>
            {(props: RenderRotateProps) => (
              <button onClick={props.onClick}>
                <img
                  src={"/icons/chat/left_rotation.svg"}
                  className={clsx("w-[1.5rem] h-[1.5rem]")}
                />
              </button>
            )}
          </Rotate>

          <Rotate direction={RotateDirection.Forward}>
            {(props: RenderRotateProps) => (
              <button onClick={props.onClick}>
                <img
                  src={"/icons/chat/right_rotation.svg"}
                  className={clsx("w-[1.5rem] h-[1.5rem]")}
                />
              </button>
            )}
          </Rotate>
        </div>
      </div>

      {/* end header */}

      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start",
          "w-full h-[calc(100vh_-_68px_-_58px)]",
          "overflow-y-auto"
        )}
      >
        {!!watch(dictionaries.pdf.file.name).length && (
          <PDFViewerUpload
            // fileURL={watch(dictionaries.pdf.file.name)}
            fileURL={`${process.env.NEXT_PUBLIC_WEB_URL}${process.env.NEXT_PUBLIC_GCP_STORAGE_PROXY_URL}/fintelite-fb598.appspot.com/docs/upload_06069ee7a36ffa7af40a1c3067295093.pdf?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=firebase-adminsdk-fpe3g%40fintelite-fb598.iam.gserviceaccount.com%2F20231215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231215T095821Z&X-Goog-Expires=525600&X-Goog-SignedHeaders=host&X-Goog-Signature=85f163f32b10119f9875d47160ff67ff79991836c0da7534090d40cf848934b257c835e480236d2d03be9bf2fd9fdc2b883974f5e8dc04b065124ebbbbeea6961f2f983948be9b4ca534315a2d0c58e85a7bb0a9488c7eb22683832e02b33756faa5127d90a211bdf926c750068ac69bced6664057e85834647ba4f18376355ebb8a1fdfc988f42fea665d796a46690db5e9201fc140fd76de801f0a0b0aa0e3f10d6a61ac51d54f79c0d5c82ce55a07e52def06032d41b33e060d7c8c1ac07cebef39755ead31a36a04cbd653d52da59b420fda8e73d8a0fcf07fe060f6407cebecfb141a9ed818785646394ec15925e9f246ed866f679855422c5da033243b`}
            onPageChanges={handlePageChanges}
            plugins={[zoomPluginInstance, rotatePluginInstance]}
            onDocumentLoad={handleDocumentLoad}
          />
        )}
      </div>
    </div>
  );
};

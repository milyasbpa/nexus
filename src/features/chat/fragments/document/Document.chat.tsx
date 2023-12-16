"use client";
import * as React from "react";
import clsx from "clsx";
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
import { useChatGetDocumentStorage } from "../../react_query/hooks/useGetDocumentStorage.chat";

export const DocumentChat = () => {
  const { watch, setValue } = useFormContext<ChatForm>();
  const dictionaries = getDictionaries("en");

  useChatGetDocumentStorage();

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

  if (watch(dictionaries.pdf.private.name) === null) {
    return <div />;
  }

  if (watch(dictionaries.pdf.private.name) === true) {
    return (
      <div
        className={clsx(
          "grid grid-cols-1 place-content-center place-items-center",
          "w-full h-[calc(100vh_-_68px)]"
        )}
      >
        <p
          className={clsx(
            "text-[0.875rem] font-normal text-[#404852] font-plusJakartaSans text-center"
          )}
        >
          {dictionaries.pdf.private.message}
        </p>
      </div>
    );
  }

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
            fileURL={watch(dictionaries.pdf.file.name)}
            onPageChanges={handlePageChanges}
            plugins={[zoomPluginInstance, rotatePluginInstance]}
            onDocumentLoad={handleDocumentLoad}
          />
        )}
      </div>
    </div>
  );
};

"use client";
import * as React from "react";
import {
  Viewer,
  DocumentLoadEvent,
  PageChangeEvent,
  PageLayout,
  Plugin,
  Worker,
} from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

export interface IPDFViewerUploadProps {
  fileURL: string | Uint8Array;
  plugins?: Plugin[] | undefined;

  onDocumentLoad?: (e: DocumentLoadEvent) => void;
  onPageChanges?: (data: PageChangeEvent) => void;
  onCancel?: () => void;
}

export const PDFViewerUpload = ({
  fileURL = "",
  plugins,
  onDocumentLoad,
  onPageChanges,
}: IPDFViewerUploadProps) => {
  const handlePageChange = (e: PageChangeEvent) => {
    if (onPageChanges) {
      onPageChanges(e);
    }
  };
  const pageLayout: PageLayout = {
    transformSize: ({ size, numPages, pageIndex }) => {
      return {
        height: size.height,
        width: size.width,
      };
    },
  };

  const handleDocumentLoad = (e: DocumentLoadEvent) => {
    if (onDocumentLoad) {
      onDocumentLoad(e);
    }
  };

  return (
    <Worker
      workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
    >
      <Viewer
        pageLayout={pageLayout}
        onDocumentLoad={handleDocumentLoad}
        fileUrl={fileURL}
        plugins={plugins}
        onPageChange={handlePageChange}
      />
    </Worker>
  );
};

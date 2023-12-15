import { NextApiRequest, NextApiResponse } from "next";

export interface PostDocumentUploadNexusRequestInterface
  extends NextApiRequest {
  payload?: PostDocumentUploadNexusRequestPayloadInterface;
}
export interface PostDocumentUploadNexusRequestPayloadInterface {
  data: FormData;
  headers: PostDocumentUploadNexusRequestPayloadHeadersInterface;
}

export interface PostDocumentUploadNexusRequestPayloadHeadersInterface {
  uid: string;
  ["access-token"]: string;
}

export interface PostDocumentUploadNexusResponseInterface
  extends NextApiResponse<
    | PostDocumentUploadNexusSuccessResponseInterface
    | PostDocumentUploadNexusErrorResponseInterface
  > {}
export interface PostDocumentUploadNexusSuccessResponseInterface {
  data: {
    owner_id: string;
    doc_id: string;
    file_name: string;
    file_url: string;
    private: boolean;
    pages: {
      page_id: string;
      page_label: string;
    }[];
  };
  message: string;
  status: number;
}

export interface PostDocumentUploadNexusErrorResponseInterface {
  error_code: string;
  message: string;
}

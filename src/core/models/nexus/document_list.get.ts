import { NextApiRequest, NextApiResponse } from "next";

export interface GetDocumentListNexusRequestInterface extends NextApiRequest {
  payload?: GetDocumentListNexusRequestPayloadInterface;
}
export interface GetDocumentListNexusRequestPayloadInterface {
  headers: GetDocumentListNexusRequestPayloadHeadersInterface;
}

export interface GetDocumentListNexusRequestPayloadHeadersInterface {
  uid: string;
  ["access-token"]: string;
}

export interface GetDocumentListNexusResponseInterface
  extends NextApiResponse<
    | GetDocumentListNexusSuccessResponseInterface
    | GetDocumentListNexusErrorResponseInterface
  > {}
export interface GetDocumentListNexusSuccessResponseInterface {
  data: {
    docs_list: GetDocumentListNexusSuccessResponseDataDocListInterface[];
  };
  message: string;
  status: number;
}

export interface GetDocumentListNexusSuccessResponseDataDocListInterface {
  doc_id: string;
  created_at: number;
  file_name: {
    file_name: string;
    page_label: string;
  };
  file_url: string;
  pages: {
    page_id: string;
    page_label: string;
  }[];
}

export interface GetDocumentListNexusErrorResponseInterface {
  error_code: string;
  message: string;
}

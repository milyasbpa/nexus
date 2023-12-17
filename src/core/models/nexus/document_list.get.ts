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
  owner_id: string;
  doc_id: string;
  created_at: number;
  file_name: string;
  file_url: string;
  private: boolean;
  pages: {
    page_id: string;
    page_label: string;
  }[];
}

export interface GetDocumentListNexusErrorResponseInterface {
  error: string;
  message: string;
  status: number;
}

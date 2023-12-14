import { NextApiRequest, NextApiResponse } from "next";

export interface GetDocumentListNexusRequestInterface extends NextApiRequest {
  payload?: GetDocumentListNexusRequestPayloadInterface;
}
export interface GetDocumentListNexusRequestPayloadInterface {
  params: GetDocumentListNexusRequestPayloadParamsInterface;
}

export interface GetDocumentListNexusRequestPayloadParamsInterface {}

export interface GetDocumentListNexusResponseInterface
  extends NextApiResponse<
    | GetDocumentListNexusSuccessResponseInterface
    | GetDocumentListNexusErrorResponseInterface
  > {}
export interface GetDocumentListNexusSuccessResponseInterface {
  data: {
    doc_list: {
      doc_id: number;
      file_name: string;
      file_url: string;
      pages: {
        page_id: string;
        page_label: string;
      }[];
    }[];
  };
  message: string;
  status: number;
}

export interface GetDocumentListNexusErrorResponseInterface {
  error_code: string;
  message: string;
}

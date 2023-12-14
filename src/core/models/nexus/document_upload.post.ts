import { NextApiRequest, NextApiResponse } from "next";

export interface PostDocumentUploadNexusRequestInterface
  extends NextApiRequest {
  payload?: PostDocumentUploadNexusRequestPayloadInterface;
}
export interface PostDocumentUploadNexusRequestPayloadInterface {
  data: FormData;
}

export interface PostDocumentUploadNexusResponseInterface
  extends NextApiResponse<
    | PostDocumentUploadNexusSuccessResponseInterface
    | PostDocumentUploadNexusErrorResponseInterface
  > {}
export interface PostDocumentUploadNexusSuccessResponseInterface {
  data: {
    email: string;
    uid: string;
  };
  message: string;
  status: number;
}

export interface PostDocumentUploadNexusErrorResponseInterface {
  error_code: string;
  message: string;
}

import { NextApiRequest, NextApiResponse } from "next";

export interface GetFileWebRequestInterface extends NextApiRequest {
  payload?: GetFileWebRequestPayloadInterface;
}
export interface GetFileWebRequestPayloadInterface {
  params: GetFileWebRequestPayloadParamsInterface;
}

export interface GetFileWebRequestPayloadParamsInterface {
  doc_url: string;
}

export interface GetFileWebResponseInterface
  extends NextApiResponse<
    GetFileWebSuccessResponseInterface | GetFileWebErrorResponseInterface
  > {}
export type GetFileWebSuccessResponseInterface = Blob;

export interface GetFileWebErrorResponseInterface {
  error_code: string;
  message: string;
}

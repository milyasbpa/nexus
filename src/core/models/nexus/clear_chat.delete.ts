import { NextApiRequest, NextApiResponse } from "next";

export interface DeleteClearChatNexusRequestInterface extends NextApiRequest {
  payload?: DeleteClearChatNexusRequestPayloadInterface;
}
export interface DeleteClearChatNexusRequestPayloadInterface {
  url: DeleteClearChatNexusRequestPayloadURLInterface;
  headers: DeleteClearChatNexusRequestPayloadHeadersInterface;
}

export interface DeleteClearChatNexusRequestPayloadURLInterface {
  doc_id: string;
}

export interface DeleteClearChatNexusRequestPayloadHeadersInterface {
  uid: string;
  ["access-token"]: string;
}

export interface DeleteClearChatNexusResponseInterface
  extends NextApiResponse<
    | DeleteClearChatNexusSuccessResponseInterface
    | DeleteClearChatNexusErrorResponseInterface
  > {}
export interface DeleteClearChatNexusSuccessResponseInterface {
  message: string;
  status: number;
}

export interface DeleteClearChatNexusErrorResponseInterface {
  error: string;
  message: string;
  status: number;
}

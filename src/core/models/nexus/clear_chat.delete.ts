import { NextApiRequest, NextApiResponse } from "next";

export interface DeleteClearChatNexusRequestInterface extends NextApiRequest {
  payload?: DeleteClearChatNexusRequestPayloadInterface;
}
export interface DeleteClearChatNexusRequestPayloadInterface {
  url: DeleteClearChatNexusRequestPayloadURLInterface;
}

export interface DeleteClearChatNexusRequestPayloadURLInterface {
  doc_id: string;
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
  error_code: string;
  message: string;
}

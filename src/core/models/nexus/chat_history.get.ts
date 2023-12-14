import { NextApiRequest, NextApiResponse } from "next";

export interface GetChatHistoryNexusRequestInterface extends NextApiRequest {
  payload?: GetChatHistoryNexusRequestPayloadInterface;
}
export interface GetChatHistoryNexusRequestPayloadInterface {
  url: GetChatHistoryNexusRequestPayloadURLInterface;
}

export interface GetChatHistoryNexusRequestPayloadURLInterface {
  doc_id: string;
}

export interface GetChatHistoryNexusResponseInterface
  extends NextApiResponse<
    | GetChatHistoryNexusSuccessResponseInterface
    | GetChatHistoryNexusErrorResponseInterface
  > {}
export interface GetChatHistoryNexusSuccessResponseInterface {
  message: string;
  status: number;
}

export interface GetChatHistoryNexusErrorResponseInterface {
  error_code: string;
  message: string;
}

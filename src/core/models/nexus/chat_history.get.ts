import { NextApiRequest, NextApiResponse } from "next";

export interface GetChatHistoryNexusRequestInterface extends NextApiRequest {
  payload?: GetChatHistoryNexusRequestPayloadInterface;
}
export interface GetChatHistoryNexusRequestPayloadInterface {
  url: GetChatHistoryNexusRequestPayloadURLInterface;
  headers: GetChatHistoryNexusRequestPayloadHeadersInterface;
}

export interface GetChatHistoryNexusRequestPayloadURLInterface {
  doc_id: string;
}

export interface GetChatHistoryNexusRequestPayloadHeadersInterface {
  uid: string;
  ["access-token"]: string;
}

export interface GetChatHistoryNexusResponseInterface
  extends NextApiResponse<
    | GetChatHistoryNexusSuccessResponseInterface
    | GetChatHistoryNexusErrorResponseInterface
  > {}
export interface GetChatHistoryNexusSuccessResponseInterface {
  message: string;
  status: number;
  data: {
    chats: {
      id: string;
      message: string;
      sender: string;
      sender_type: string;
      created_at: number;
      persona: "GENERAL" | "LEGAL_CONSULTANT" | "FINANCIAL_CONSULTANT" | null;
    }[];
  };
}

export interface GetChatHistoryNexusErrorResponseInterface {
  error: string;
  message: string;
  status: number;
}

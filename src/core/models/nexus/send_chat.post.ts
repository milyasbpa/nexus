import { NextApiRequest, NextApiResponse } from "next";

export interface PostSendChatNexusRequestInterface extends NextApiRequest {
  payload?: PostSendChatNexusRequestPayloadInterface;
}
export interface PostSendChatNexusRequestPayloadInterface {
  url: PostSendChatNexusRequestPayloadURLInterface;
  data: PostSendChatNexusRequestPayloadDataInterface;
  headers: PostSendChatNexusRequestPayloadHeadersInterface;
}

export interface PostSendChatNexusRequestPayloadURLInterface {
  doc_id: string;
}

export interface PostSendChatNexusRequestPayloadDataInterface {
  message: string;
  persona: "GENERAL" | "LEGAL_CONSULTANT" | "FINANCIAL_CONSULTANT";
}

export interface PostSendChatNexusRequestPayloadHeadersInterface {
  uid: string;
  ["access-token"]: string;
}

export interface PostSendChatNexusResponseInterface
  extends NextApiResponse<
    | PostSendChatNexusSuccessResponseInterface
    | PostSendChatNexusErrorResponseInterface
  > {}
export interface PostSendChatNexusSuccessResponseInterface {
  data: {
    id: string;
    message: string;
    sender: string;
    sender_type: string;
    created_at: number;
    persona: "GENERAL" | "LEGAL_CONSULTANT" | "FINANCIAL_CONSULTANT";
  };
  message: string;
  status: number;
}

export interface PostSendChatNexusErrorResponseInterface {
  error_code: string;
  message: string;
}

import { NextApiRequest, NextApiResponse } from "next";

export interface PostSendChatNexusRequestInterface extends NextApiRequest {
  payload?: PostSendChatNexusRequestPayloadInterface;
}
export interface PostSendChatNexusRequestPayloadInterface {
  url: PostSendChatNexusRequestPayloadURLInterface;
  data: PostSendChatNexusRequestPayloadDataInterface;
}

export interface PostSendChatNexusRequestPayloadURLInterface {
  doc_id: string;
}

export interface PostSendChatNexusRequestPayloadDataInterface {
  message: string;
  persona: "GENERAL" | "LEGAL_CONSULTANT" | "FINANCIAL_CONSULTANT";
}

export interface PostSendChatNexusResponseInterface
  extends NextApiResponse<
    | PostSendChatNexusSuccessResponseInterface
    | PostSendChatNexusErrorResponseInterface
  > {}
export interface PostSendChatNexusSuccessResponseInterface {
  data: {
    email: string;
    uid: string;
  };
  message: string;
  status: number;
}

export interface PostSendChatNexusErrorResponseInterface {
  error_code: string;
  message: string;
}

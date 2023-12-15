import { NextApiRequest, NextApiResponse } from "next";

export interface GetChatSuggestionNexusRequestInterface extends NextApiRequest {
  payload?: GetChatSuggestionNexusRequestPayloadInterface;
}
export interface GetChatSuggestionNexusRequestPayloadInterface {
  params?: GetChatSuggestionNexusRequestPayloadParamsInterface;
  headers: GetChatSuggestionNexusRequestPayloadHeadersInterface;
}

export interface GetChatSuggestionNexusRequestPayloadParamsInterface {
  persona: "GENERAL" | "LEGAL_CONSULTANT" | "FINANCIAL_CONSULTANT";
}

export interface GetChatSuggestionNexusRequestPayloadHeadersInterface {
  uid: string;
  ["access-token"]: string;
}

export interface GetChatSuggestionNexusResponseInterface
  extends NextApiResponse<
    | GetChatSuggestionNexusSuccessResponseInterface
    | GetChatSuggestionNexusErrorResponseInterface
  > {}
export interface GetChatSuggestionNexusSuccessResponseInterface {
  data: {
    suggestions: {
      message: string;
      persona: string;
      category: string;
    }[];
  };
  message: string;
  status: number;
}

export interface GetChatSuggestionNexusErrorResponseInterface {
  error_code: string;
  message: string;
}

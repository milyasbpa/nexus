import { NextApiRequest, NextApiResponse } from "next";

export interface GetChatSuggestionNexusRequestInterface extends NextApiRequest {
  payload?: GetChatSuggestionNexusRequestPayloadInterface;
}
export interface GetChatSuggestionNexusRequestPayloadInterface {
  params?: GetChatSuggestionNexusRequestPayloadParamsInterface;
}

export interface GetChatSuggestionNexusRequestPayloadParamsInterface {
  persona: "GENERAL" | "LEGAL_CONSULTANT" | "FINANCIAL_CONSULTANT";
}

export interface GetChatSuggestionNexusResponseInterface
  extends NextApiResponse<
    | GetChatSuggestionNexusSuccessResponseInterface
    | GetChatSuggestionNexusErrorResponseInterface
  > {}
export interface GetChatSuggestionNexusSuccessResponseInterface {
  message: string;
  status: number;
}

export interface GetChatSuggestionNexusErrorResponseInterface {
  error_code: string;
  message: string;
}

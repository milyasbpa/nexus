import { NextApiRequest, NextApiResponse } from "next";

export interface GetChatSuggestionNexusRequestInterface extends NextApiRequest {
  payload?: GetChatSuggestionNexusRequestPayloadInterface;
}
export interface GetChatSuggestionNexusRequestPayloadInterface {
  url: GetChatSuggestionNexusRequestPayloadURLInterface;
}

export interface GetChatSuggestionNexusRequestPayloadURLInterface {
  doc_id: string;
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

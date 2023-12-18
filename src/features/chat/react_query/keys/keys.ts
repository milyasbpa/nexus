import { GetChatSuggestionNexusRequestPayloadInterface } from "@/core/models/nexus";

export const ChatReactQueryKey = {
  GetUserStorage: () => {
    return ["ChatReactQueryKey.GetUserStorage"];
  },
  GetDocumentStorage: () => {
    return ["ChatReactQueryKey.GetDocumentStorage"];
  },
  GetChatStorage: () => {
    return ["ChatReactQueryKey.GetChatStorage"];
  },
  SetChatStorage: () => {
    return ["ChatReactQueryKey.SetChatStorage"];
  },
  GetChatSuggestionNexus: (
    payload?: GetChatSuggestionNexusRequestPayloadInterface
  ) => {
    return ["ChatReactQueryKey.GetChatSuggestionNexus", [payload] as const];
  },
  GetFileWeb: () => {
    return ["ChatReactQueryKey.GetFileWeb"];
  },
  DeleteClearChatNexus: () => {
    return ["ChatReactQueryKey.DeleteClearChatNexus"];
  },
  GetChatHistoryNexus: () => {
    return ["ChatReactQueryKey.GetChatHistoryNexus"];
  },
  PostSendChatNexus: () => {
    return ["ChatReactQueryKey.PostSendChatNexus"];
  },
};

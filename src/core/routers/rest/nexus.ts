export const NexusRestAPIURL = {
  postLogin: () => "/v1/ocr/nexus/login",
  postRegister: () => "/v1/ocr/nexus/register",
  getProfile: () => "/v1/ocr/nexus/profile",
  postDocumentUpload: () => "/v1/ocr/nexus/document/upload",
  getDocumentList: () => "/v1/ocr/nexus/documents",
  deleteClearChat: (data: { doc_id: string }) =>
    `/v1/ocr/nexus/chat/${data.doc_id}`,
  getChatHistory: (data: { doc_id: string }) =>
    `/v1/ocr/nexus/chat/${data.doc_id}`,
  postSendChat: (data: { doc_id: string }) =>
    `/v1/ocr/nexus/chat/${data.doc_id}`,
  getChatSuggestion: () => `/v1/ocr/nexus/chat-suggestion`,
  getLookupUserByEmail: () => `/v1/ocr/nexus/user-lookup`,
};

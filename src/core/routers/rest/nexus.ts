export const NexusRestAPIURL = {
  postLogin: () => "/api/v1/nexus/login",
  postRegister: () => "/api/v1/nexus/register",
  getProfile: () => "/api/v1/nexus/profile",
  postUpload: () => "/api/v1/nexus/document/upload",
  getDocumentList: () => "/api/v1/nexus/documents",
  deleteAllChat: (data: { doc_id: string }) =>
    `/api/v1/nexus/chat/${data.doc_id}`,
  getChatByID: (data: { doc_id: string }) =>
    `/api/v1/nexus/chat/${data.doc_id}`,
  getSuggestion: () => `/api/v1/nexus/chat-suggestion`,
  getLookupUserByEmail: () => `/api/v1/nexus/user-lookup`,
};

export const NexusWebURL = {
  getLogin: () => "/login",
  getRegistration: () => "/registration",
  getAbout: () => "/about",
  getDocuments: () => "/documents",
  getChatByDocumentId: (data: { doc_id?: string }) => `/chat/${data.doc_id}`,
};

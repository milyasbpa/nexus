export const NexusWebURL = {
  getLogin: () => "/",
  getRegistration: () => "/registration",
  getAbout: () => "/about",
  getDocuments: () => "/documents",
  getChatByDocumentId: (data: { doc_id?: string }) => `/chat/${data.doc_id}`,
};

import { DocumentStorageInterface } from "@/core/models/storage";
import localforage from "localforage";

export const setDocumentStorage = (data: DocumentStorageInterface) => {
  return localforage
    .setItem("Document", data)
    .then((res: DocumentStorageInterface) => res);
};

export const getDocumentStorage = () => {
  return localforage
    .getItem("Document")
    .then((res: any | DocumentStorageInterface) => res);
};

export const removeDocumentStorage = () => {
  return localforage
    .removeItem("Document")
    .then((res: any | DocumentStorageInterface) => res);
};

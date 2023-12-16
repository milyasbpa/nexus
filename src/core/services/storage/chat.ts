import { ChatStorageInterface } from "@/core/models/storage";
import localforage from "localforage";

export const setChatStorage = (data: ChatStorageInterface) => {
  return localforage
    .setItem("Chat", data)
    .then((res: ChatStorageInterface) => res);
};

export const getChatStorage = () => {
  return localforage
    .getItem("Chat")
    .then((res: any | ChatStorageInterface) => res);
};

export const removeChatStorage = () => {
  return localforage
    .removeItem("Chat")
    .then((res: any | ChatStorageInterface) => res);
};

import { UserStorageInterface } from "@/core/models/storage";
import localforage from "localforage";

export const setUserStorage = (data: UserStorageInterface) => {
  return localforage
    .setItem("User", data)
    .then((res: UserStorageInterface) => res);
};

export const getUserStorage = () => {
  return localforage
    .getItem("User")
    .then((res: any | UserStorageInterface) => res);
};

export const removeUserStorage = () => {
  return localforage
    .removeItem("User")
    .then((res: any | UserStorageInterface) => res);
};

import { RememberMeStorageInterface } from "@/core/models/storage";
import localforage from "localforage";

export const setRememberMeStorage = (data: RememberMeStorageInterface) => {
  return localforage
    .setItem("RememberMe", data)
    .then((res: RememberMeStorageInterface) => res);
};

export const getRememberMeStorage = () => {
  return localforage
    .getItem("RememberMe")
    .then((res: any | RememberMeStorageInterface) => res);
};

export const removeRememberMeStorage = () => {
  return localforage
    .removeItem("RememberMe")
    .then((res: any | RememberMeStorageInterface) => res);
};

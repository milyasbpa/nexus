import id from "@/features/about/i18/locales/id.json";
import en from "@/features/about/i18/locales/en.json";

const dictionaries: { [key: string]: typeof id | typeof en } = {
  id: id,
  en: en,
};

export const getDictionaries = (locale: string) => dictionaries[locale];

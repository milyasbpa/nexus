import { getDictionaries } from "../../i18";
export const defaultValues = {
  [getDictionaries("en").data_table.search.input.name]: "",
  [getDictionaries("en").upload.dialog.name]: false,
  [getDictionaries("en").upload.dialog.tab.name]: "drag_and_drop",
  [getDictionaries("en").upload.dialog.url.setting.input.private_document.name]:
    false,
};

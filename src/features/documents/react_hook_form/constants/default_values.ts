import { getDictionaries } from "../../i18";
export const defaultValues = {
  // kickstart
  [getDictionaries("en").kickstart.name]: true,
  // data tables
  [getDictionaries("en").data_table.search.input.name]: "",

  // upload
  [getDictionaries("en").upload.alert.name]: false,

  [getDictionaries("en").upload.dialog.name]: false,
  [getDictionaries("en").upload.dialog.tab.name]: "drag_and_drop",

  [getDictionaries("en").upload.dialog.browse.input.name]: null,
  [getDictionaries("en").upload.dialog.browse.setting.input.private_document
    .name]: false,
  [getDictionaries("en").upload.dialog.browse.preview.name]: "",

  [getDictionaries("en").upload.dialog.url.input.name]: "",
  [getDictionaries("en").upload.dialog.url.file.name]: null,
  [getDictionaries("en").upload.dialog.url.setting.input.private_document.name]:
    false,

  [getDictionaries("en").upload.pesona_dialog.name]: false,
  [getDictionaries("en").upload.pesona_dialog.full_name.name]: "",
  [getDictionaries("en").upload.pesona_dialog.input.name]: "",
  [getDictionaries("en").upload.pesona_dialog.is_loading.name]: false,

  [getDictionaries("en").data_table.name]: [
    // {
    //   no: "1",
    //   file_name: "Resume Feedback Loop",
    //   date: "23-04-2010",
    // },
  ],
};

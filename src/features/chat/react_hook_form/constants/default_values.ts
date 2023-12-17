import { getDictionaries } from "../../i18";
export const defaultValues = {
  // pdf
  [getDictionaries("en").pdf.file.name]: "",
  [getDictionaries("en").pdf.header.name]: {
    name: "",
    current_page: 1,
    total_page: 1,
  },
  [getDictionaries("en").pdf.private.name]: null,

  // conversation
  [getDictionaries("en").conversation.name]: true,
  // persona
  [getDictionaries("en").conversation.persona.name]: {
    id: "GENERAL",
    name: "General",
  },
  // history
  [getDictionaries("en").conversation.history.name]: [],
  // getDictionaries("en").conversation.history.default_data,
  // suggestion
  [getDictionaries("en").conversation.suggestion.name]: false,
  [getDictionaries("en").conversation.suggestion.message.name]:
    getDictionaries("en").conversation.suggestion.message.data,
  // keyboard
  [getDictionaries("en").conversation.keyboard.input.name]: "",
};

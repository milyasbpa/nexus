import { getDictionaries } from "../../i18";
export const defaultValues = {
  // conversation
  [getDictionaries("en").pdf.header.name]: {
    name: "",
    current_page: 1,
    total_page: 1,
  },
  // conversation
  [getDictionaries("en").conversation.name]: true,
  [getDictionaries("en").conversation.history.name]:
    getDictionaries("en").conversation.history.default_data,
  [getDictionaries("en").conversation.suggestion.name]: true,
  [getDictionaries("en").conversation.suggestion.message.name]:
    getDictionaries("en").conversation.suggestion.message.data,
  [getDictionaries("en").conversation.keyboard.input.name]: "",

  // old
  [getDictionaries("en").form.type.name]: "email_password_login",
  [getDictionaries("en").form.token.name]: "",
  [getDictionaries("en").form.uid.name]: "",
  [getDictionaries("en").form.email.name]: "",
  [getDictionaries("en").form.password.name]: "",
  [getDictionaries("en").form.remember_me.name]: false,
};

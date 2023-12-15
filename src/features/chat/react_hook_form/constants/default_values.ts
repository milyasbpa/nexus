import { getDictionaries } from "../../i18";
export const defaultValues = {
  [getDictionaries("en").form.type.name]: "email_password_login",
  [getDictionaries("en").form.token.name]: "",
  [getDictionaries("en").form.uid.name]: "",
  [getDictionaries("en").form.email.name]: "",
  [getDictionaries("en").form.password.name]: "",
  [getDictionaries("en").form.remember_me.name]: false,
};

import { getDictionaries } from "../../i18";
export const defaultValues = {
  // notification
  [getDictionaries("en").notification.is_open.name]: false,
  [getDictionaries("en").notification.message.name]: "",
  [getDictionaries("en").notification.variant.name]: "danger",
  // form
  [getDictionaries("en").form.type.name]: "email_password_login",
  [getDictionaries("en").form.token.name]: "",
  [getDictionaries("en").form.uid.name]: "",
  [getDictionaries("en").form.email.name]: "",
  [getDictionaries("en").form.password.name]: "",
  [getDictionaries("en").form.remember_me.name]: false,
  [getDictionaries("en").form.actions.login.is_loading.name]: false,
  [getDictionaries("en").form.actions.google_login.is_loading.name]: false,
};

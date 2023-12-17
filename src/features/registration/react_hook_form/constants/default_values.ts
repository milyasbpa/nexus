import { getDictionaries } from "../../i18";
export const defaultValues = {
  [getDictionaries("en").notification.is_open.name]: false,
  [getDictionaries("en").notification.message.name]: "",
  [getDictionaries("en").notification.variant.name]: "danger",
  // form
  [getDictionaries("en").form.google_full_name.name]: "",
  [getDictionaries("en").form.full_name.name]: "",
  [getDictionaries("en").form.email.name]: "",
  [getDictionaries("en").form.password.name]: "",
  [getDictionaries("en").form.password_confirmation.name]: "",
  [getDictionaries("en").form.actions.register.is_loading.name]: false,
  [getDictionaries("en").form.actions.google_register.is_loading.name]: false,
};

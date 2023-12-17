"use client";
import { BadgeComponent } from "@/core/components/badge";
import * as React from "react";
import { useFormContext } from "react-hook-form";
import { RegistrationForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";

export const NotificationRegistration = () => {
  const { watch, setValue } = useFormContext<RegistrationForm>();
  const dictionaries = getDictionaries("en");
  return (
    <BadgeComponent
      isOpen={watch(dictionaries.notification.is_open.name)}
      message={watch(dictionaries.notification.message.name)}
      variant={watch(dictionaries.notification.variant.name)}
    />
  );
};

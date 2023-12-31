"use client";
import { BadgeComponent } from "@/core/components/badge";
import * as React from "react";
import { useFormContext } from "react-hook-form";
import { LoginForm } from "../../react_hook_form/keys";
import { getDictionaries } from "../../i18";

export const NotificationLogin = () => {
  const { watch, setValue } = useFormContext<LoginForm>();
  const dictionaries = getDictionaries("en");
  return (
    <BadgeComponent
      isOpen={watch(dictionaries.notification.is_open.name)}
      message={watch(dictionaries.notification.message.name)}
      variant={watch(dictionaries.notification.variant.name)}
    />
  );
};

"use client";
import { RegistrationContainer } from "@/features/registration/containers";
import { defaultValues } from "@/features/registration/react_hook_form/constants/default_values";
import { FormProvider, useForm } from "react-hook-form";

export default function RegistrationPage() {
  const methods = useForm({
    defaultValues: defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <RegistrationContainer />
    </FormProvider>
  );
}

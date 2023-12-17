"use client";
import { LoginContainer } from "@/features/login/containers";
import { defaultValues } from "@/features/login/react_hook_form/constants/default_values";
import { FormProvider, useForm } from "react-hook-form";

export default function LoginPage() {
  const methods = useForm({
    defaultValues: defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <LoginContainer />
    </FormProvider>
  );
}

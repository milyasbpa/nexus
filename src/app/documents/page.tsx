'use client'
import { DocumentsContainer } from "@/features/documents/containers";
import { defaultValues } from "@/features/documents/react_hook_form/constants/default_values";
import { FormProvider, useForm } from "react-hook-form";

export default function DocumentsPage() {
  const methods = useForm({
    defaultValues: defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <DocumentsContainer />;
    </FormProvider>
  );
}

"use client";
import { ChatContainer } from "@/features/chat/containers";
import { defaultValues } from "@/features/chat/react_hook_form/constants/default_values";
import { FormProvider, useForm } from "react-hook-form";

export default function ChatPage() {
  const methods = useForm({
    defaultValues: defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <ChatContainer />
    </FormProvider>
  );
}

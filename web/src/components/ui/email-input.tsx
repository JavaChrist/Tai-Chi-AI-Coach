import type { ComponentProps } from "react";

import { Input } from "@/components/ui/input";

type EmailInputProps = Omit<ComponentProps<typeof Input>, "type">;

/** Champ e-mail avec type et saisie adaptés. */
export function EmailInput({ autoComplete = "email", inputMode = "email", ...props }: EmailInputProps) {
  return (
    <Input
      type="email"
      autoComplete={autoComplete}
      inputMode={inputMode}
      spellCheck={false}
      {...props}
    />
  );
}

import type { ComponentProps } from "react";

import { Input } from "@/components/ui/input";

type TextInputProps = Omit<ComponentProps<typeof Input>, "type">;

/** Champ texte générique. */
export function TextInput(props: TextInputProps) {
  return <Input type="text" {...props} />;
}

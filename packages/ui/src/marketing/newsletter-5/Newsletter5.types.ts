import type { FormEventHandler, HTMLAttributes } from "react";

export interface Newsletter5Props
  extends Omit<HTMLAttributes<HTMLElement>, "title" | "onSubmit"> {
  eyebrow?: string;
  title?: string;
  description?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  subscribeLabel?: string;
  reassurance?: string;
  onSubscribe?: (email: string) => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

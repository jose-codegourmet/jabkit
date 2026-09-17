import type {
  ButtonHTMLAttributes,
  FieldsetHTMLAttributes,
  FormEventHandler,
  FormHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from "react";
import type { ButtonProps } from "@/atoms/button";

export type QuestionnaireShortcutMode = "letters" | "numbers";
export type QuestionnaireItemStatus = "unanswered" | "answered" | "skipped";

export interface QuestionnaireChoiceDefinition {
  disabled?: boolean;
  value: string;
}

export interface QuestionnaireItemDefinition {
  choices?: readonly QuestionnaireChoiceDefinition[];
  disabled?: boolean;
  name: string;
  required?: boolean;
}

export interface QuestionnaireProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  defaultItem?: string;
  item?: string;
  items?: readonly QuestionnaireItemDefinition[];
  onItemChange?: (name: string) => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  shortcuts?: QuestionnaireShortcutMode;
}

export type QuestionnaireProgressProps = HTMLAttributes<HTMLDivElement>;

export interface QuestionnaireItemProps
  extends Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, "name"> {
  invalid?: boolean;
  multiple?: boolean;
  name: string;
  required?: boolean;
}

export type QuestionnaireTitleProps = HTMLAttributes<HTMLLegendElement>;
export type QuestionnaireDescriptionProps =
  HTMLAttributes<HTMLParagraphElement>;
export type QuestionnaireChoicesProps = HTMLAttributes<HTMLDivElement>;
export type QuestionnaireErrorProps = HTMLAttributes<HTMLParagraphElement>;

export interface QuestionnaireChoiceProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
  value: string;
}

export type QuestionnaireChoiceDescriptionProps =
  HTMLAttributes<HTMLSpanElement>;

export interface QuestionnaireInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "form" | "name" | "type"
  > {
  type?:
    | "date"
    | "datetime-local"
    | "email"
    | "month"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
}

export type QuestionnaireActionsProps = HTMLAttributes<HTMLDivElement>;

export type QuestionnaireNavButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> &
    Pick<ButtonProps, "size" | "variant">;

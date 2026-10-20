import { responseTimePlaceholder } from "../../_data/contact";
import { contactEmailPlaceholder, demoNotice } from "../../_data/site";

export const contactSeo = {
  title: "Contact FULL VOLUME — tickets, access, and questions",
  description:
    "Ask FULL VOLUME about tickets, access needs, press, or anything else. One short form, and a real person reads every message.",
} as const;

export const contactHeader = {
  title: "Talk to us.",
  body: "Questions about tickets, access, or anything else. A real person reads every message.",
  notice: demoNotice.contact,
} as const;

export type FieldId = "name" | "email" | "topic" | "message";

export const fieldOrder: readonly FieldId[] = [
  "name",
  "email",
  "topic",
  "message",
];

export const fieldCopy: Record<
  FieldId,
  { label: string; help?: string; error: string }
> = {
  name: {
    label: "Name",
    help: "What should we call you?",
    error: "Enter your name.",
  },
  email: {
    label: "Email",
    help: "We'll only use this to reply.",
    error: "Enter an email address like name@example.com.",
  },
  topic: {
    label: "Topic",
    error: "Choose a topic.",
  },
  message: {
    label: "Message",
    help: "For access requests, tell us what would make your day work.",
    error: "Write a message so we know how to help.",
  },
};

export const formCopy = {
  /** Empty first option shown until a topic is chosen. */
  topicPrompt: "Select…",
  onBehalf: "I'm asking on behalf of someone else.",
  submit: "Send message",
  sending: "Sending…",
  /** Visually hidden prefix read before each inline error. */
  errorPrefix: "Error:",
} as const;

export function summaryTitle(count: number): string {
  return `Fix ${count} ${count === 1 ? "thing" : "things"} to send your message.`;
}

export const sendError = {
  message: "Your message didn't send. Nothing is lost — try again.",
  retry: "Try again",
} as const;

export const demoStateCopy = {
  badge: "Demo state",
  toggle: "Simulate a failed send",
} as const;

export const successCopy = {
  title: (name: string) => `Got it. Thanks, ${name}.`,
  bodyBefore: "We'll reply to ",
  bodyMiddle: " within ",
  responseTime: responseTimePlaceholder,
  bodyAfter: ".",
  back: { label: "Back to the lineup", href: "/lineup" },
} as const;

export const directContact = {
  lead: "Prefer email?",
  line: `${contactEmailPlaceholder}.`,
} as const;

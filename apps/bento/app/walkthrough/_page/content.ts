import type { Route } from "next";
import { placeholders } from "../../_data/site";

export const walkthroughSeo = {
  title: "Request a walkthrough — DAYMARK",
  description:
    "Book a DAYMARK walkthrough. We'll show the dashboard and full views using a day like yours and answer questions about pricing and setup.",
} as const;

export const walkthroughIntro = {
  title: "Request a walkthrough.",
  body: "Tell us a little about your business. We'll reply to arrange a time and walk through DAYMARK using a day like yours.",
  list: [
    "See the dashboard and each full view",
    "Map your current calendar and task list to tiles",
    "Ask about pricing and setup",
  ],
  imageId: "ben-cta-mobile",
  imageAlt:
    "A business owner at a standing desk holding a coffee and looking toward the window",
} as const;

export const businessTypes = [
  "Clinic or therapy practice",
  "Salon or studio",
  "Repair or service shop",
  "Pet care",
  "Other",
] as const;

export const teamSizes = ["Just me", "2–5", "6–15", "16 or more"] as const;

export const walkthroughForm = {
  fields: {
    name: { label: "Your name", error: "Enter your name." },
    email: {
      label: "Work email",
      help: "We'll only use this to arrange your walkthrough.",
      error: "Enter a work email, like name@business.com.",
    },
    business: { label: "Business name", error: "Enter your business name." },
    businessType: { label: "Type of business" },
    teamSize: { label: "Team size" },
    tools: {
      label: "What do you use today?",
      help: "For example: a shared calendar, a group chat and a spreadsheet.",
    },
    pricing: { label: "I'd also like pricing information" },
  },
  submit: "Send request",
  submitting: "Sending…",
  privacyNotice: placeholders.privacyNotice,
  privacyLink: { label: "Privacy", href: "/privacy" as Route },
  /** Error summary title, e.g. "2 fields need attention." */
  summaryTitle: (count: number) =>
    count === 1
      ? "1 field needs attention."
      : `${count} fields need attention.`,
  failure: {
    text: "We couldn't send your request. Check your connection and try again.",
    retry: "Try again",
  },
  success: {
    title: "Request received.",
    body: (firstName: string, email: string) =>
      `Thanks, ${firstName}. We'll email ${email} to arrange a time. In the meantime, you can explore the sample dashboard.`,
    action: { label: "See a sample dashboard", href: "/demo" as Route },
  },
} as const;

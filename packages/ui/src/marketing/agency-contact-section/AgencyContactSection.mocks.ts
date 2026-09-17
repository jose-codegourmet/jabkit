import { agencyContactFormMocks } from "@/marketing/agency-contact-form/AgencyContactForm.mocks";
import type { AgencyContactSectionProps } from "./AgencyContactSection.types";

export const agencyContactSectionMocks = {
  default: {
    id: "contact",
    number: "05",
    label: "Contact",
    title: "Let's make something specific.",
    emphasis: "specific.",
    body: "Currently booking projects starting Q3 2026. Reach out with a brief, a budget range, and a timeline. Replies within 48 hours.",
    studioName: "Studio Layout",
    address: "123 Cr. Victor Hugo, 33000 Bordeaux",
    hours: "Mon-Fri, 09/00-18/00",
    appointment: "By appointment",
    form: agencyContactFormMocks.default,
  },
  alternate: {
    id: "contact",
    number: "06",
    label: "Write",
    title: "Send the brief first.",
    emphasis: "brief",
    body: "We read every note. Include a timeline and the surfaces the work has to live on.",
    studioName: "Studio North",
    address: "Invalidenstrasse 90, 10115 Berlin",
    hours: "Tue-Thu, 10/00-17/00",
    appointment: "By appointment",
    form: agencyContactFormMocks.alternate,
  },
} satisfies Record<string, AgencyContactSectionProps>;

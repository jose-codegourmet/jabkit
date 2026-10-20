import { contactHref } from "../../_data/contact";
import type { InfoSectionId } from "../../_data/info";

/** Practical info (/info) copy, verbatim from the FULL VOLUME brief. */

export const infoMeta = {
  title: "Practical info — travel, access, safety | FULL VOLUME (demo)",
  description:
    "Getting there, venue map, accessibility, safety, policies, and FAQ for FULL VOLUME. Plain answers for a two-day music and arts festival.",
} as const;

export const infoHeader = {
  eyebrow: "Practical info",
  title: "Know before you go.",
  body: "Getting there, getting around, and getting help. Plain answers, no fine print hiding in a collage.",
  navLabel: "On this page",
  imageId: "max-background-poster-wall",
} as const;

/** Small running index shown beside each section heading (decorative). */
export const sectionIndex: Record<InfoSectionId, string> = {
  "getting-there": "01",
  venue: "02",
  accessibility: "03",
  safety: "04",
  policies: "05",
  faq: "06",
};

export interface TermDetail {
  term: string;
  /** May contain "[… — client to confirm]" tokens. */
  detail: string;
}

export const gettingThere = {
  heading: "Getting there",
  items: [
    { term: "Venue", detail: "[Venue name and address — client to confirm]." },
    { term: "Gates open", detail: "[Gate times — client to confirm]." },
    {
      term: "Public transport",
      detail: "[Routes and stops — client to confirm].",
    },
    { term: "Cycling and parking", detail: "[Details — client to confirm]." },
    { term: "Accessible drop-off", detail: "[Location — client to confirm]." },
  ] satisfies TermDetail[],
};

export const venue = {
  heading: "Venue map",
  listLink: "Read the map as a list",
  caption: "Demo map. The real layout will be supplied by the venue.",
  mapTitle: "Demo venue map",
  mapDescription:
    "A demo site plan with four stages, two entrances, step-free routes, toilets, water, welfare and first aid points. The same information is written out in the list that follows the map.",
  mapRegionLabel: "Venue map. Scroll to pan when zoomed in.",
  zoomGroupLabel: "Map zoom",
  zoomIn: "Zoom in",
  zoomOut: "Zoom out",
  legendHeading: "Legend",
  legendNote: "All demo",
  listHeading: "The map as a list",
  listNote: "Demo layout. Every location below is a placeholder.",
} as const;

export const accessibility = {
  heading: "Accessibility",
  body: "We want every stage to be reachable. Tell us what you need before you arrive and we'll help plan your day.",
  items: [
    { term: "Step-free routes", detail: "[Details — client to confirm]" },
    { term: "Viewing areas", detail: "[Details — client to confirm]" },
    { term: "Quiet space", detail: "[Details — client to confirm]" },
    { term: "Assistance animals", detail: "[Policy — client to confirm]" },
    { term: "Companion tickets", detail: "[Policy — client to confirm]" },
  ] satisfies TermDetail[],
  action: { label: "Make an access request", href: contactHref("access") },
  motionNote:
    "This site offers a Pause motion control and follows your reduced-motion setting.",
};

export interface SafetyItem {
  /** Bold lead-in, e.g. "Medical help:". */
  lead?: string;
  text: string;
  /** Shows the lime welfare marker used on the map. */
  welfareMarker?: boolean;
}

export const safety = {
  heading: "Safety and welfare",
  items: [
    {
      text: "Look for welfare points on the map, marked in lime.",
      welfareMarker: true,
    },
    {
      text: "Lost your friends? Pick a meeting point on the map before the headliners.",
    },
    {
      lead: "Medical help:",
      text: "[First aid details — client to confirm].",
    },
    {
      lead: "Report a concern:",
      text: "[Reporting route — client to confirm].",
    },
  ] satisfies SafetyItem[],
};

export const policiesCopy = {
  heading: "Policies",
} as const;

export interface FaqEntry {
  question: string;
  /** May contain "[… — client to confirm]" tokens. */
  answer: string;
  /** Turns the first match of `text` inside the answer into a link. */
  link?: { text: string; href: string };
}

export const faq = {
  heading: "Questions, answered.",
  items: [
    {
      question: "Can I buy tickets on the day?",
      answer: "[Door sales policy — client to confirm].",
    },
    {
      question: "Are set times final?",
      answer:
        "Set times can change. Check the schedule on the day. [Update policy — client to confirm].",
      link: { text: "schedule", href: "/schedule" },
    },
    {
      question: "Can I save my own plan?",
      answer:
        "Yes. Tap Add on any set in the schedule. Your plan is saved in this browser.",
      link: { text: "schedule", href: "/schedule" },
    },
    {
      question: "Is there visual art as well as music?",
      answer:
        "Yes. FULL VOLUME is a music and visual arts festival, with art spaces between the stages.",
    },
    {
      question: "Who do I ask about access?",
      answer: "Use the access request form and we'll reply before the weekend.",
      link: { text: "access request form", href: contactHref("access") },
    },
  ] satisfies FaqEntry[],
};

export const contactNudge = {
  lead: "Still stuck?",
  link: { label: "Contact us", href: contactHref() },
} as const;

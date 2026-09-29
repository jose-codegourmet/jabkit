import { legalChrome } from "../../_legal/content";

export const termsSeo = {
  title: "Terms — Pillo",
  description:
    "Pillo's terms of use. Placeholder on the sample site until Pillo Studio supplies the final text.",
} as const;

export const termsDocument = {
  title: "Terms of use",
  updated: legalChrome.updated,
  notice: legalChrome.notice,
  body: "[Terms of use — client to confirm]",
} as const;

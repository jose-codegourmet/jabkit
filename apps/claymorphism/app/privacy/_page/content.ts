import { legalChrome } from "../../_legal/content";

export const privacySeo = {
  title: "Privacy — Pillo",
  description:
    "Pillo's privacy policy. Placeholder on the sample site until Pillo Studio supplies the final text.",
} as const;

export const privacyDocument = {
  title: "Privacy policy",
  updated: legalChrome.updated,
  notice: legalChrome.notice,
  body: "[Privacy policy — client to confirm]",
} as const;

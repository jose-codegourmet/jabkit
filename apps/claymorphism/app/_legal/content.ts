export const legalChrome = {
  updated: "Last updated: [Date — client to confirm]",
  notice:
    "This page is a placeholder for Pillo's sample website. The final policy will be supplied by Pillo Studio.",
} as const;

export type LegalDocument = {
  title: string;
  updated: string;
  notice: string;
  body: string;
};

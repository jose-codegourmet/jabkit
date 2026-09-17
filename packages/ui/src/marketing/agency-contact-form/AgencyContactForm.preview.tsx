// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { AgencyContactForm } from "./AgencyContactForm";
import { agencyContactFormMocks } from "./AgencyContactForm.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background p-8">
      <AgencyContactForm {...agencyContactFormMocks.default} />
    </div>
    <div className="dark bg-background p-8">
      <AgencyContactForm {...agencyContactFormMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => <AgencyContactForm {...agencyContactFormMocks.default} />,
  Variants: () => <AgencyContactForm {...agencyContactFormMocks.alternate} />,
  ThemeComparison,
};

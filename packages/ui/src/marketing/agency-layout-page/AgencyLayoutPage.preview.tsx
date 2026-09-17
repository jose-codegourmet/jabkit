// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { AgencyLayoutPage } from "./AgencyLayoutPage";
import { agencyLayoutPageMocks } from "./AgencyLayoutPage.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <AgencyLayoutPage {...agencyLayoutPageMocks.default} />
    </div>
    <div className="dark bg-background">
      <AgencyLayoutPage {...agencyLayoutPageMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => <AgencyLayoutPage {...agencyLayoutPageMocks.default} />,
  Variants: () => <AgencyLayoutPage {...agencyLayoutPageMocks.alternate} />,
  ThemeComparison,
};

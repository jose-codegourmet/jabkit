// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { AgencyTopbar } from "./AgencyTopbar";
import { agencyTopbarMocks } from "./AgencyTopbar.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <AgencyTopbar {...agencyTopbarMocks.default} />
    </div>
    <div className="dark bg-background">
      <AgencyTopbar {...agencyTopbarMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => <AgencyTopbar {...agencyTopbarMocks.default} />,
  Variants: () => <AgencyTopbar {...agencyTopbarMocks.alternate} />,
  ThemeComparison,
};

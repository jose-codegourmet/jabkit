// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { TraffoLandingPage } from "./TraffoLandingPage";
import { traffoLandingPageMocks } from "./TraffoLandingPage.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <TraffoLandingPage {...traffoLandingPageMocks.default} />
    </div>
    <div className="dark bg-background">
      <TraffoLandingPage {...traffoLandingPageMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => <TraffoLandingPage {...traffoLandingPageMocks.default} />,
  Variants: () => <TraffoLandingPage {...traffoLandingPageMocks.alternate} />,
  ThemeComparison,
};

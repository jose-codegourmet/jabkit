// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { EmberFooterCta } from "./EmberFooterCta";
import { emberFooterCtaMocks } from "./EmberFooterCta.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <EmberFooterCta {...emberFooterCtaMocks.default} />
    </div>
    <div className="dark bg-background">
      <EmberFooterCta {...emberFooterCtaMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <EmberFooterCta {...emberFooterCtaMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <EmberFooterCta {...emberFooterCtaMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

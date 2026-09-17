// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { TraffoFooter } from "./TraffoFooter";
import { traffoFooterMocks } from "./TraffoFooter.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <TraffoFooter {...traffoFooterMocks.default} />
    </div>
    <div className="dark bg-background">
      <TraffoFooter {...traffoFooterMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => <TraffoFooter {...traffoFooterMocks.default} />,
  Variants: () => <TraffoFooter {...traffoFooterMocks.alternate} />,
  ThemeComparison,
};

// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { TraffoHeader } from "./TraffoHeader";
import { traffoHeaderMocks } from "./TraffoHeader.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <TraffoHeader {...traffoHeaderMocks.default} />
    </div>
    <div className="dark bg-background">
      <TraffoHeader {...traffoHeaderMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => <TraffoHeader {...traffoHeaderMocks.default} />,
  Variants: () => <TraffoHeader {...traffoHeaderMocks.alternate} />,
  ThemeComparison,
};

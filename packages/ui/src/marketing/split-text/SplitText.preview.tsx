// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { SplitText } from "./SplitText";
import { splitTextMocks } from "./SplitText.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <SplitText {...splitTextMocks.default} />
    </div>
    <div className="dark bg-background">
      <SplitText {...splitTextMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <SplitText {...splitTextMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <SplitText {...splitTextMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

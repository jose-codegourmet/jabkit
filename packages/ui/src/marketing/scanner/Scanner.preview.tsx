// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Scanner } from "./Scanner";
import { scannerMocks } from "./Scanner.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Scanner {...scannerMocks.default} />
    </div>
    <div className="dark bg-background">
      <Scanner {...scannerMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Scanner {...scannerMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Scanner {...scannerMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

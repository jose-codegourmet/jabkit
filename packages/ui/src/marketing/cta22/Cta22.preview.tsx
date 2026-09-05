// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Cta22 } from "./Cta22";
import { cta22Mocks } from "./Cta22.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Cta22 {...cta22Mocks.default} />
    </div>
    <div className="dark bg-background">
      <Cta22 {...cta22Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Cta22 {...cta22Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Cta22 {...cta22Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

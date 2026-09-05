// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Faq12 } from "./Faq12";
import { faq12Mocks } from "./Faq12.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Faq12 {...faq12Mocks.default} />
    </div>
    <div className="dark bg-background">
      <Faq12 {...faq12Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Faq12 {...faq12Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Faq12 {...faq12Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

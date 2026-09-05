// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Bento19 } from "./Bento19";
import { bento19Mocks } from "./Bento19.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Bento19 {...bento19Mocks.default} />
    </div>
    <div className="dark bg-background">
      <Bento19 {...bento19Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Bento19 {...bento19Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Bento19 {...bento19Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

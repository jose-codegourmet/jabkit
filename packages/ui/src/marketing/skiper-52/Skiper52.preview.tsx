// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Skiper52 } from "./Skiper52";
import { skiper52Mocks } from "./Skiper52.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Skiper52 {...skiper52Mocks.default} />
    </div>
    <div className="dark bg-background">
      <Skiper52 {...skiper52Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Skiper52 {...skiper52Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Skiper52 {...skiper52Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

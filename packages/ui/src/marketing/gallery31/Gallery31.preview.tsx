// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Gallery31 } from "./Gallery31";
import { gallery31AlternateMocks, gallery31Mocks } from "./Gallery31.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Gallery31 {...gallery31Mocks} />
    </div>
    <div className="dark bg-background">
      <Gallery31 {...gallery31Mocks} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Gallery31 {...gallery31Mocks} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Gallery31 {...gallery31AlternateMocks} />
    </div>
  ),
  ThemeComparison,
};

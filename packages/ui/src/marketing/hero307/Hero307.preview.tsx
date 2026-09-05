// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Hero307 } from "./Hero307";
import { hero307EditorialMocks, hero307Mocks } from "./Hero307.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Hero307 title="Light mode console" />
    </div>
    <div className="dark bg-background">
      <Hero307 title="Dark mode console" />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Hero307 {...hero307Mocks} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Hero307 {...hero307EditorialMocks} />
    </div>
  ),
  ThemeComparison,
};

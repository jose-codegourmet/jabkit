// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Waitlist3 } from "./Waitlist3";
import { waitlist3Mocks } from "./Waitlist3.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Waitlist3 {...waitlist3Mocks.default} />
    </div>
    <div className="dark bg-background">
      <Waitlist3 {...waitlist3Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Waitlist3 {...waitlist3Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Waitlist3 {...waitlist3Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

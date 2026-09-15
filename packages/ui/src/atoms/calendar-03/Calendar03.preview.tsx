// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Calendar03 } from "./Calendar03";
import { calendar03Mocks } from "./Calendar03.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border sm:grid-cols-2">
    <div className="bg-background p-6">
      <Calendar03 {...calendar03Mocks.default} />
    </div>
    <div className="dark bg-background p-6">
      <Calendar03 {...calendar03Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="flex items-center justify-center px-4">
      <Calendar03 {...calendar03Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="flex items-center justify-center px-4">
      <Calendar03 {...calendar03Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { VCheckbox11 } from "./VCheckbox11";
import { vCheckbox11Mocks } from "./VCheckbox11.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border sm:grid-cols-2">
    <div className="bg-background p-6">
      <VCheckbox11 {...vCheckbox11Mocks.default} />
    </div>
    <div className="dark bg-background p-6">
      <VCheckbox11 {...vCheckbox11Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full max-w-[40rem]">
      <VCheckbox11 {...vCheckbox11Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full max-w-[40rem]">
      <VCheckbox11 {...vCheckbox11Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

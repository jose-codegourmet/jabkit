// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { MenuVertical } from "./MenuVertical";
import { menuVerticalMocks } from "./MenuVertical.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="min-h-[28rem] bg-background">
      <MenuVertical {...menuVerticalMocks.default} />
    </div>
    <div className="dark min-h-[28rem] bg-background">
      <MenuVertical {...menuVerticalMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="min-h-[32rem] w-full bg-background">
      <MenuVertical {...menuVerticalMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="min-h-[32rem] w-full bg-background">
      <MenuVertical {...menuVerticalMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

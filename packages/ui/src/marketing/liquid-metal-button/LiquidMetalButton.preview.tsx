// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { LiquidMetalButton } from "./LiquidMetalButton";
import { liquidMetalButtonMocks } from "./LiquidMetalButton.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <LiquidMetalButton {...liquidMetalButtonMocks.default} />
    </div>
    <div className="dark bg-background">
      <LiquidMetalButton {...liquidMetalButtonMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <LiquidMetalButton {...liquidMetalButtonMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <LiquidMetalButton {...liquidMetalButtonMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

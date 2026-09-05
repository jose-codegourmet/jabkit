// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Login4 } from "./Login4";
import { login4Mocks } from "./Login4.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Login4 {...login4Mocks.default} />
    </div>
    <div className="dark bg-background">
      <Login4 {...login4Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Login4 {...login4Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Login4 {...login4Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

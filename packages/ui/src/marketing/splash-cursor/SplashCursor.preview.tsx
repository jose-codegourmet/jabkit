// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { SplashCursor } from "./SplashCursor";
import { splashCursorMocks } from "./SplashCursor.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <SplashCursor {...splashCursorMocks.default} />
    </div>
    <div className="dark bg-background">
      <SplashCursor {...splashCursorMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <SplashCursor {...splashCursorMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <SplashCursor {...splashCursorMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

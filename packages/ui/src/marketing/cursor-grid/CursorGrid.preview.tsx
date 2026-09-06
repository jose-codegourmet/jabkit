// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { CursorGrid } from "./CursorGrid";
import { cursorGridMocks } from "./CursorGrid.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <CursorGrid {...cursorGridMocks.default} />
    </div>
    <div className="dark bg-background">
      <CursorGrid {...cursorGridMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <CursorGrid {...cursorGridMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <CursorGrid {...cursorGridMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

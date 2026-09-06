// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ShapeGrid } from "./ShapeGrid";
import { shapeGridMocks } from "./ShapeGrid.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <ShapeGrid {...shapeGridMocks.default} />
    </div>
    <div className="dark bg-background">
      <ShapeGrid {...shapeGridMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <ShapeGrid {...shapeGridMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <ShapeGrid {...shapeGridMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

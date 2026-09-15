// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Table2 } from "./Table2";
import { table2Mocks } from "./Table2.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Table2 {...table2Mocks.default} />
    </div>
    <div className="dark bg-background">
      <Table2 {...table2Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Table2 {...table2Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Table2 {...table2Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

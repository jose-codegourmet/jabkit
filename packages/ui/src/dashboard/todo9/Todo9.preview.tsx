// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Todo9 } from "./Todo9";
import { todo9Mocks } from "./Todo9.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Todo9 {...todo9Mocks.default} />
    </div>
    <div className="dark bg-background">
      <Todo9 {...todo9Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Todo9 {...todo9Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Todo9 {...todo9Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

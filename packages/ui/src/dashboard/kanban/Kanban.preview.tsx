// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Kanban } from "./Kanban";
import { kanbanMocks } from "./Kanban.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Kanban {...kanbanMocks.default} />
    </div>
    <div className="dark bg-background">
      <Kanban {...kanbanMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Kanban {...kanbanMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Kanban {...kanbanMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

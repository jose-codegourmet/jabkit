// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ApplicationShell13 } from "./ApplicationShell13";
import { applicationShell13Mocks } from "./ApplicationShell13.mocks";

export default {
  Default: () => (
    <div className="min-h-dvh bg-background">
      <ApplicationShell13 {...applicationShell13Mocks.default} />
    </div>
  ),
  Variants: () => (
    <ApplicationShell13 {...applicationShell13Mocks.alternate}>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-medium tracking-tight">Pulse</h1>
        <p className="text-sm text-muted-foreground">
          A quieter workspace view with fewer alerts and a different org.
        </p>
      </div>
    </ApplicationShell13>
  ),
};

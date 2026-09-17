// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { KindPanther } from "./KindPanther";
import { kindPantherMocks } from "./KindPanther.mocks";

export default {
  Default: () => (
    <div className="bg-background p-8 text-foreground">
      <KindPanther {...kindPantherMocks.default} />
    </div>
  ),
  Tones: () => (
    <div className="flex flex-wrap items-end gap-3 bg-background p-8 text-foreground">
      <KindPanther {...kindPantherMocks.muted} />
      <KindPanther {...kindPantherMocks.default} />
      <KindPanther {...kindPantherMocks.primary} size="lg" />
    </div>
  ),
  ThemeComparison: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="flex items-center justify-center bg-background p-8">
        <KindPanther {...kindPantherMocks.default} />
      </div>
      <div className="dark flex items-center justify-center bg-background p-8">
        <KindPanther {...kindPantherMocks.default} />
      </div>
    </div>
  ),
};

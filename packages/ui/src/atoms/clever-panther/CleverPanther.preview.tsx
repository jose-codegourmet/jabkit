// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { CleverPanther } from "./CleverPanther";
import { cleverPantherMocks } from "./CleverPanther.mocks";

export default {
  Default: () => (
    <div className="bg-background p-8 text-foreground">
      <CleverPanther {...cleverPantherMocks.default} />
    </div>
  ),
  Tones: () => (
    <div className="flex flex-wrap items-end gap-6 bg-background p-8 text-foreground">
      <CleverPanther {...cleverPantherMocks.compact} />
      <CleverPanther {...cleverPantherMocks.raised} />
      <CleverPanther {...cleverPantherMocks.caption} />
    </div>
  ),
};

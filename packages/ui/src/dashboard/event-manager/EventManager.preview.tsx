// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { EventManager } from "./EventManager";
import { eventManagerMocks } from "./EventManager.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <EventManager {...eventManagerMocks.default} />
    </div>
    <div className="dark bg-background">
      <EventManager {...eventManagerMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <EventManager {...eventManagerMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <EventManager {...eventManagerMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

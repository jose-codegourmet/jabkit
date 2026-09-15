// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { TrackerCard } from "./TrackerCard";
import { trackerCardMocks } from "./TrackerCard.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <TrackerCard {...trackerCardMocks.default} />
    </div>
    <div className="dark bg-background">
      <TrackerCard {...trackerCardMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <TrackerCard {...trackerCardMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <TrackerCard {...trackerCardMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

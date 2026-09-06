// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { HoloCard } from "./HoloCard";
import { holoCardMocks } from "./HoloCard.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <HoloCard {...holoCardMocks.default} />
    </div>
    <div className="dark bg-background">
      <HoloCard {...holoCardMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <HoloCard {...holoCardMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <HoloCard {...holoCardMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { TiltedCard } from "./TiltedCard";
import { tiltedCardMocks } from "./TiltedCard.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <TiltedCard {...tiltedCardMocks.default} />
    </div>
    <div className="dark bg-background">
      <TiltedCard {...tiltedCardMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <TiltedCard {...tiltedCardMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <TiltedCard {...tiltedCardMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

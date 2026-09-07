// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { StoryScroll } from "./StoryScroll";
import { storyScrollMocks } from "./StoryScroll.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <StoryScroll {...storyScrollMocks.default} />
    </div>
    <div className="dark bg-background">
      <StoryScroll {...storyScrollMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <StoryScroll {...storyScrollMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <StoryScroll {...storyScrollMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};

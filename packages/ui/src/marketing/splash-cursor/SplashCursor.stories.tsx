import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { SplashCursor } from "./SplashCursor";
import { splashCursorMocks } from "./SplashCursor.mocks";

const meta = {
  title: "Marketing/SplashCursor",
  component: SplashCursor,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SplashCursor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...splashCursorMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <SplashCursor {...splashCursorMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...splashCursorMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <SplashCursor {...splashCursorMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...splashCursorMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <SplashCursor {...splashCursorMocks.default} />
      </div>
      <div className="dark bg-background">
        <SplashCursor {...splashCursorMocks.default} />
      </div>
    </div>
  ),
};

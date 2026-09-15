import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { TrackerCard } from "./TrackerCard";
import { trackerCardMocks } from "./TrackerCard.mocks";

const meta = {
  title: "Marketing/TrackerCard",
  component: TrackerCard,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TrackerCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...trackerCardMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <TrackerCard {...trackerCardMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...trackerCardMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <TrackerCard {...trackerCardMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...trackerCardMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <TrackerCard {...trackerCardMocks.default} />
      </div>
      <div className="dark bg-background">
        <TrackerCard {...trackerCardMocks.default} />
      </div>
    </div>
  ),
};

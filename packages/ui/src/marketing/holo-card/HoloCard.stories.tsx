import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { HoloCard } from "./HoloCard";
import { holoCardMocks } from "./HoloCard.mocks";

const meta = {
  title: "Marketing/HoloCard",
  component: HoloCard,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof HoloCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...holoCardMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <HoloCard {...holoCardMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...holoCardMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <HoloCard {...holoCardMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...holoCardMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <HoloCard {...holoCardMocks.default} />
      </div>
      <div className="dark bg-background">
        <HoloCard {...holoCardMocks.default} />
      </div>
    </div>
  ),
};

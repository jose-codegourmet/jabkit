import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { TiltedCard } from "./TiltedCard";
import { tiltedCardMocks } from "./TiltedCard.mocks";

const meta = {
  title: "Marketing/TiltedCard",
  component: TiltedCard,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TiltedCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...tiltedCardMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <TiltedCard {...tiltedCardMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...tiltedCardMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <TiltedCard {...tiltedCardMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...tiltedCardMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <TiltedCard {...tiltedCardMocks.default} />
      </div>
      <div className="dark bg-background">
        <TiltedCard {...tiltedCardMocks.default} />
      </div>
    </div>
  ),
};

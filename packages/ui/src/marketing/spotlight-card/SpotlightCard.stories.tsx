import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { SpotlightCard } from "./SpotlightCard";
import { spotlightCardMocks } from "./SpotlightCard.mocks";

const meta = {
  title: "Marketing/SpotlightCard",
  component: SpotlightCard,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SpotlightCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...spotlightCardMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <SpotlightCard {...spotlightCardMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...spotlightCardMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <SpotlightCard {...spotlightCardMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...spotlightCardMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <SpotlightCard {...spotlightCardMocks.default} />
      </div>
      <div className="dark bg-background">
        <SpotlightCard {...spotlightCardMocks.default} />
      </div>
    </div>
  ),
};

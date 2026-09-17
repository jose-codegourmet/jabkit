import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { TraffoFeatureCard } from "./TraffoFeatureCard";
import { traffoFeatureCardMocks } from "./TraffoFeatureCard.mocks";

const meta = {
  title: "Marketing/TraffoFeatureCard",
  component: TraffoFeatureCard,
  parameters: { layout: "centered" },
} satisfies Meta<typeof TraffoFeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...traffoFeatureCardMocks.default },
  render: () => (
    <div className="w-[min(380px,92vw)] bg-background p-8">
      <TraffoFeatureCard {...traffoFeatureCardMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...traffoFeatureCardMocks.alternate },
  render: () => (
    <div className="w-[min(380px,92vw)] bg-background p-8">
      <TraffoFeatureCard {...traffoFeatureCardMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...traffoFeatureCardMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <TraffoFeatureCard {...traffoFeatureCardMocks.default} />
      </div>
      <div className="dark bg-background p-8">
        <TraffoFeatureCard {...traffoFeatureCardMocks.default} />
      </div>
    </div>
  ),
};

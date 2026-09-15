import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { OrderConfirmationCard } from "./OrderConfirmationCard";
import { orderConfirmationCardMocks } from "./OrderConfirmationCard.mocks";

const meta = {
  title: "Marketing/OrderConfirmationCard",
  component: OrderConfirmationCard,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof OrderConfirmationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...orderConfirmationCardMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <OrderConfirmationCard {...orderConfirmationCardMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...orderConfirmationCardMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <OrderConfirmationCard {...orderConfirmationCardMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...orderConfirmationCardMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <OrderConfirmationCard {...orderConfirmationCardMocks.default} />
      </div>
      <div className="dark bg-background">
        <OrderConfirmationCard {...orderConfirmationCardMocks.default} />
      </div>
    </div>
  ),
};

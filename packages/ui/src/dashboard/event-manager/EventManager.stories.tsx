import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { EventManager } from "./EventManager";
import { eventManagerMocks } from "./EventManager.mocks";

const meta = {
  title: "Dashboard/EventManager",
  component: EventManager,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof EventManager>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...eventManagerMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <EventManager {...eventManagerMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...eventManagerMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <EventManager {...eventManagerMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...eventManagerMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <EventManager {...eventManagerMocks.default} />
      </div>
      <div className="dark bg-background">
        <EventManager {...eventManagerMocks.default} />
      </div>
    </div>
  ),
};

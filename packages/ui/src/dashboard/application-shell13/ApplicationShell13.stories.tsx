import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { ApplicationShell13 } from "./ApplicationShell13";
import { applicationShell13Mocks } from "./ApplicationShell13.mocks";

const meta = {
  title: "Dashboard/ApplicationShell13",
  component: ApplicationShell13,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ApplicationShell13>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...applicationShell13Mocks.default },
  render: () => (
    <div className="min-h-dvh bg-background">
      <ApplicationShell13 {...applicationShell13Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...applicationShell13Mocks.alternate },
  render: () => (
    <ApplicationShell13 {...applicationShell13Mocks.alternate}>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-medium tracking-tight">Pulse</h1>
        <p className="text-sm text-muted-foreground">
          A quieter workspace view with fewer alerts and a different org.
        </p>
      </div>
    </ApplicationShell13>
  ),
};

export const ThemeComparison: Story = {
  args: { ...applicationShell13Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <ApplicationShell13 {...applicationShell13Mocks.default} />
      </div>
      <div className="dark bg-background">
        <ApplicationShell13 {...applicationShell13Mocks.default} />
      </div>
    </div>
  ),
};

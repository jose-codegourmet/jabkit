import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { ApplicationShell1 } from "./ApplicationShell1";
import { applicationShell1Mocks } from "./ApplicationShell1.mocks";

const meta = {
  title: "Dashboard/ApplicationShell1",
  component: ApplicationShell1,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ApplicationShell1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...applicationShell1Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <ApplicationShell1 {...applicationShell1Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...applicationShell1Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <ApplicationShell1 {...applicationShell1Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...applicationShell1Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <ApplicationShell1 {...applicationShell1Mocks.default} />
      </div>
      <div className="dark bg-background">
        <ApplicationShell1 {...applicationShell1Mocks.default} />
      </div>
    </div>
  ),
};

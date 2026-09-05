import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { TubelightNavbar } from "./TubelightNavbar";
import { tubelightNavbarMocks } from "./TubelightNavbar.mocks";

const meta = {
  title: "Marketing/TubelightNavbar",
  component: TubelightNavbar,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TubelightNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...tubelightNavbarMocks.default },
  render: () => (
    <div className="min-h-80 bg-background text-foreground">
      <TubelightNavbar {...tubelightNavbarMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...tubelightNavbarMocks.alternate },
  render: () => (
    <div className="min-h-80 bg-background text-foreground">
      <TubelightNavbar {...tubelightNavbarMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...tubelightNavbarMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="min-h-56 bg-background">
        <TubelightNavbar {...tubelightNavbarMocks.default} />
      </div>
      <div className="dark min-h-56 bg-background">
        <TubelightNavbar {...tubelightNavbarMocks.default} />
      </div>
    </div>
  ),
};

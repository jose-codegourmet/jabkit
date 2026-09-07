import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { NavbarWithAnimatedMegaDropdown } from "./NavbarWithAnimatedMegaDropdown";
import { navbarWithAnimatedMegaDropdownMocks } from "./NavbarWithAnimatedMegaDropdown.mocks";

const meta = {
  title: "Marketing/NavbarWithAnimatedMegaDropdown",
  component: NavbarWithAnimatedMegaDropdown,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof NavbarWithAnimatedMegaDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...navbarWithAnimatedMegaDropdownMocks.default },
  render: () => (
    <div className="min-h-[28rem] bg-background text-foreground">
      <NavbarWithAnimatedMegaDropdown
        {...navbarWithAnimatedMegaDropdownMocks.default}
      />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...navbarWithAnimatedMegaDropdownMocks.alternate },
  render: () => (
    <div className="min-h-[22rem] bg-background text-foreground">
      <NavbarWithAnimatedMegaDropdown
        {...navbarWithAnimatedMegaDropdownMocks.alternate}
      />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...navbarWithAnimatedMegaDropdownMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="min-h-[28rem] bg-background">
        <NavbarWithAnimatedMegaDropdown
          {...navbarWithAnimatedMegaDropdownMocks.default}
        />
      </div>
      <div className="dark min-h-[28rem] bg-background">
        <NavbarWithAnimatedMegaDropdown
          {...navbarWithAnimatedMegaDropdownMocks.default}
        />
      </div>
    </div>
  ),
};

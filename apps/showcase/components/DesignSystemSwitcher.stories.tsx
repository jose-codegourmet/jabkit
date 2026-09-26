import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { designSystemsFixture } from "../.storybook/fixtures";
import { DesignSystemSwitcher } from "./DesignSystemSwitcher";

const meta = {
  title: "Chrome/DesignSystemSwitcher",
  component: DesignSystemSwitcher,
  args: { systems: designSystemsFixture },
  parameters: { layout: "padded" },
} satisfies Meta<typeof DesignSystemSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const KeyboardNavigation: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getByRole("tab", { name: /Minimal/ }).focus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(
      canvas.getByRole("heading", { name: "Common Hours" }),
    ).toBeVisible();
  },
};

export const NotDeployed: Story = { args: { initialSlug: "retro" } };

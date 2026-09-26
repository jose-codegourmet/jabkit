import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { ThemeSplit } from "./ThemeSplit";

const meta = {
  title: "Home/ThemeSplit",
  component: ThemeSplit,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ThemeSplit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SwitchToDark: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dark = canvas.getByRole("button", { name: "Dark" });
    await userEvent.click(dark);
    await waitFor(() => expect(dark).toHaveAttribute("aria-pressed", "true"));
  },
};

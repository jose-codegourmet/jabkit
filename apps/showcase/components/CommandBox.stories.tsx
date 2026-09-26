import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { CommandBox } from "./CommandBox";

const meta = {
  title: "Chrome/CommandBox",
  component: CommandBox,
  args: {
    label: "Install command",
    options: [
      { id: "npx", label: "npx", command: "npx jabkit add button" },
      { id: "pnpm", label: "pnpm dlx", command: "pnpm dlx jabkit add button" },
      { id: "bunx", label: "bunx", command: "bunx jabkit add button" },
    ],
  },
  parameters: { layout: "padded" },
} satisfies Meta<typeof CommandBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SwitchRunner: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "bunx" }));
    await expect(canvas.getByText("bunx jabkit add button")).toBeVisible();
  },
};

export const SingleCommand: Story = {
  args: {
    size: "sm",
    options: [{ id: "init", label: "init", command: "npx jabkit init" }],
  },
};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InstallCommand } from "./InstallCommand";

const meta = {
  title: "Chrome/InstallCommand",
  component: InstallCommand,
  args: { name: "button" },
  parameters: { layout: "padded" },
} satisfies Meta<typeof InstallCommand>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

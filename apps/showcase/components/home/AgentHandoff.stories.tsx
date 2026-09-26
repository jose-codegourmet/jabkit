import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AgentHandoff } from "./AgentHandoff";

const meta = {
  title: "Home/AgentHandoff",
  component: AgentHandoff,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AgentHandoff>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile1" } },
};

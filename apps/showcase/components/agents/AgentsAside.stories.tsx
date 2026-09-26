import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AgentsAside } from "./AgentsAside";

const meta = {
  title: "Agents/AgentsAside",
  component: AgentsAside,
  args: { endpoint: "https://jabkit.joseadrianbuctuanon.dev/mcp" },
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="max-w-[300px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AgentsAside>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};

export const WithFlowStep: Story = {
  args: { flowStep: "Step 2 of 4, after search_components." },
};

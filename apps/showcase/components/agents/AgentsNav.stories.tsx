import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fireEvent, within } from "storybook/test";
import { mcpToolNames } from "../../lib/mcp-tools";
import { AgentsNav } from "./AgentsNav";

const meta = {
  title: "Agents/AgentsNav",
  component: AgentsNav,
  args: { tools: mcpToolNames },
  parameters: {
    layout: "fullscreen",
    nextjs: { navigation: { pathname: "/agents/get_install_plan" } },
  },
  decorators: [
    (Story) => (
      <div className="grid desk:grid-cols-[280px_1fr]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AgentsNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  globals: { viewport: { value: "desktop" } },
};

export const Filtered: Story = {
  globals: { viewport: { value: "desktop" } },
  play: async ({ canvasElement }) => {
    const rail = within(canvasElement.querySelector("aside") as HTMLElement);
    fireEvent.change(rail.getByLabelText("Filter tools"), {
      target: { value: "install" },
    });
    await expect(rail.queryByText("get_conventions")).toBeNull();
    await expect(rail.getByText("get_install_plan")).toBeInTheDocument();
  },
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile1" } },
};

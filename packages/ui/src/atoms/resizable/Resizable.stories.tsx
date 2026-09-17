import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./Resizable";
import { resizableMocks } from "./Resizable.mocks";

const meta = {
  title: "Atoms/Resizable",
  component: ResizablePanelGroup,
  parameters: { layout: "centered" },
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ResizablePanelGroup
      className="max-w-sm rounded-lg border border-border"
      orientation="horizontal"
    >
      <ResizablePanel defaultSize="50%">
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">{resizableMocks.default.one}</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="25%">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">
                {resizableMocks.default.two}
              </span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="75%">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">
                {resizableMocks.default.three}
              </span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup
      className="min-h-[200px] max-w-sm rounded-lg border border-border"
      orientation="vertical"
    >
      <ResizablePanel defaultSize="25%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">
            {resizableMocks.vertical.header}
          </span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="75%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">
            {resizableMocks.vertical.content}
          </span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Handle: Story = {
  render: () => (
    <ResizablePanelGroup
      className="min-h-[200px] max-w-sm rounded-lg border border-border"
      orientation="horizontal"
    >
      <ResizablePanel defaultSize="25%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">{resizableMocks.handle.sidebar}</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="75%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">{resizableMocks.handle.content}</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <ResizablePanelGroup
          className="max-w-sm rounded-lg border border-border"
          orientation="horizontal"
        >
          <ResizablePanel defaultSize="50%">
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">
                {resizableMocks.default.one}
              </span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="50%">
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">
                {resizableMocks.default.two}
              </span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <div className="dark bg-background p-8">
        <ResizablePanelGroup
          className="max-w-sm rounded-lg border border-border"
          orientation="horizontal"
        >
          <ResizablePanel defaultSize="50%">
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">
                {resizableMocks.default.one}
              </span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="50%">
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">
                {resizableMocks.default.two}
              </span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  ),
};

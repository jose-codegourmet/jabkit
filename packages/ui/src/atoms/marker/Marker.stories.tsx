import type { Meta, StoryObj } from "@storybook/react";
import { GitBranchIcon, Loader2Icon, SearchIcon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Marker, MarkerContent, MarkerIcon } from "./Marker";
import { markerMocks } from "./Marker.mocks";

const meta = {
  title: "Atoms/Marker",
  component: Marker,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Marker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker>
        <MarkerIcon>
          <GitBranchIcon />
        </MarkerIcon>
        <MarkerContent>{markerMocks.default.switched}</MarkerContent>
      </Marker>
      <Marker role="status">
        <MarkerIcon>
          <Loader2Icon
            data-slot="spinner"
            className="animate-spin motion-reduce:animate-none"
          />
        </MarkerIcon>
        <MarkerContent className="shimmer">
          {markerMocks.default.thinking}
        </MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>{markerMocks.default.compacted}</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <SearchIcon />
        </MarkerIcon>
        <MarkerContent>{markerMocks.default.explored}</MarkerContent>
      </Marker>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker>
        <MarkerContent>{markerMocks.variants.default}</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>{markerMocks.variants.separator}</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerContent>{markerMocks.variants.border}</MarkerContent>
      </Marker>
    </div>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <div className="flex w-full max-w-sm flex-col gap-8">
          <Marker>
            <MarkerIcon>
              <GitBranchIcon />
            </MarkerIcon>
            <MarkerContent>{markerMocks.default.switched}</MarkerContent>
          </Marker>
          <Marker variant="separator">
            <MarkerContent>{markerMocks.default.compacted}</MarkerContent>
          </Marker>
          <Marker variant="border">
            <MarkerContent>{markerMocks.variants.border}</MarkerContent>
          </Marker>
        </div>
      </div>
      <div className="dark bg-background p-8">
        <div className="flex w-full max-w-sm flex-col gap-8">
          <Marker>
            <MarkerIcon>
              <GitBranchIcon />
            </MarkerIcon>
            <MarkerContent>{markerMocks.default.switched}</MarkerContent>
          </Marker>
          <Marker variant="separator">
            <MarkerContent>{markerMocks.default.compacted}</MarkerContent>
          </Marker>
          <Marker variant="border">
            <MarkerContent>{markerMocks.variants.border}</MarkerContent>
          </Marker>
        </div>
      </div>
    </div>
  ),
};

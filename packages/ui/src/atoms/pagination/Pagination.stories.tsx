import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./Pagination";
import { paginationMocks } from "./Pagination.mocks";

const meta = {
  title: "Atoms/Pagination",
  component: Pagination,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={paginationMocks.default.previousHref} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={paginationMocks.default.pages[0].href}>
            {paginationMocks.default.pages[0].label}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={paginationMocks.default.pages[1].href} isActive>
            {paginationMocks.default.pages[1].label}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={paginationMocks.default.pages[2].href}>
            {paginationMocks.default.pages[2].label}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={paginationMocks.default.nextHref} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink
              href={paginationMocks.simple.pages[0].href}
              isActive
            >
              {paginationMocks.simple.pages[0].label}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={paginationMocks.simple.pages[1].href}>
              {paginationMocks.simple.pages[1].label}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={paginationMocks.simple.pages[2].href}>
              {paginationMocks.simple.pages[2].label}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={paginationMocks.simple.pages[3].href}>
              {paginationMocks.simple.pages[3].label}
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={paginationMocks.iconsOnly.previousHref} />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={paginationMocks.iconsOnly.nextHref} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href={paginationMocks.default.previousHref} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={paginationMocks.default.pages[0].href}>
                {paginationMocks.default.pages[0].label}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={paginationMocks.default.pages[1].href}
                isActive
              >
                {paginationMocks.default.pages[1].label}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={paginationMocks.default.pages[2].href}>
                {paginationMocks.default.pages[2].label}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href={paginationMocks.default.nextHref} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div className="dark bg-background p-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href={paginationMocks.default.previousHref} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={paginationMocks.default.pages[0].href}>
                {paginationMocks.default.pages[0].label}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={paginationMocks.default.pages[1].href}
                isActive
              >
                {paginationMocks.default.pages[1].label}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={paginationMocks.default.pages[2].href}>
                {paginationMocks.default.pages[2].label}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href={paginationMocks.default.nextHref} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  ),
};

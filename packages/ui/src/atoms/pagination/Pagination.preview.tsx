// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
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

export default {
  Default: () => (
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
  Variants: () => (
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

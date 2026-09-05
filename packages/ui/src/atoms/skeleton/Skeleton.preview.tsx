// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Skeleton } from "./Skeleton";

const PreviewSkeleton = () => (
  <div className="w-52 space-y-3">
    <div className="flex items-center gap-3">
      <Skeleton className="size-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-3 w-16" />
      </div>
    </div>
    <Skeleton className="h-3 w-full" />
  </div>
);

export default {
  Default: PreviewSkeleton,
  Variants: PreviewSkeleton,
};

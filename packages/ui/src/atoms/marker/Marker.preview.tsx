import { GitBranchIcon, Loader2Icon, SearchIcon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Marker, MarkerContent, MarkerIcon } from "./Marker";
import { markerMocks } from "./Marker.mocks";

export default {
  Default: () => (
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
  Variants: () => (
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

// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Badge } from "./Badge";

export default {
  Default: () => <Badge variant="primary">New</Badge>,
  Variants: () => <Badge variant="secondary">In review</Badge>,
};

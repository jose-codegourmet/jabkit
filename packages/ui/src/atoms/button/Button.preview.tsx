// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Button } from "./Button";

export default {
  Default: () => <Button variant="primary">Browse the library</Button>,
  Variants: () => <Button variant="secondary">Browse the library</Button>,
};

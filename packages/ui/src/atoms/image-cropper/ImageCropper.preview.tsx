// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ImageCropper } from "./ImageCropper";
import { imageCropperMocks } from "./ImageCropper.mocks";

export default {
  Default: () => <ImageCropper {...imageCropperMocks.default} />,
  Variants: () => <ImageCropper {...imageCropperMocks.widescreen} />,
};

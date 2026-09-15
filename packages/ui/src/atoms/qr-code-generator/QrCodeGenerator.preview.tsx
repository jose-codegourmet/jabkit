// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { QrCodeGenerator } from "./QrCodeGenerator";
import { qrCodeGeneratorMocks } from "./QrCodeGenerator.mocks";

export default {
  Default: () => <QrCodeGenerator {...qrCodeGeneratorMocks.default} />,
  Variants: () => <QrCodeGenerator {...qrCodeGeneratorMocks.event} />,
};

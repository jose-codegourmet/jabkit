import type { TwoFactor5Props } from "./TwoFactor5.types";

export const twoFactor5Mocks = {
  default: {
    title: "Pair your authenticator",
    description:
      "Scan the QR code with your authenticator app, then enter the six-digit code it shows.",
    scanInstruction: "Open your authenticator and scan this code to pair.",
    codeLabel: "Verification code",
    submitLabel: "Continue",
    otpauthUri:
      "otpauth://totp/Northline:you@northline.app?secret=JBSWY3DPEHPK3PXP&issuer=Northline&algorithm=SHA1&digits=6&period=30",
    qrAlt: "Authenticator pairing QR code for Northline",
  },
  alternate: {
    title: "Finish two-factor setup",
    description:
      "Harbor uses a time-based code from your authenticator. Scan once, then confirm with the current digits.",
    scanInstruction: "Point your camera at this square to add Harbor.",
    codeLabel: "Six-digit code",
    submitLabel: "Verify and continue",
    otpauthUri:
      "otpauth://totp/Harbor:ops@harbor.studio?secret=HXDMVJECJJWSRB3H&issuer=Harbor&algorithm=SHA1&digits=6&period=30",
    qrAlt: "Authenticator pairing QR code for Harbor",
    codeDefaultValue: "482193",
  },
} satisfies Record<string, TwoFactor5Props>;

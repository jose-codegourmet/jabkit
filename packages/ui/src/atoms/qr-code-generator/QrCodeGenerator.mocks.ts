export const qrCodeGeneratorMocks = {
  default: {
    defaultValue: "https://example.com?utm=demo",
    size: 300,
  },
  event: {
    defaultValue: "https://jabkit.dev/events/opening-night",
    title: "QR Code",
    size: 256,
    downloadFileName: "opening-night-qr.png",
  },
  empty: {
    defaultValue: "",
  },
  loading: {
    defaultValue: "https://example.com?utm=demo",
    isLoading: true,
    size: 300,
  },
} as const;

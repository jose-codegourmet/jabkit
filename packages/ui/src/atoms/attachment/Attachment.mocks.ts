export const attachmentMocks = {
  images: [
    {
      name: "workspace.png",
      meta: "PNG · 820 KB",
      src: "/assets/1fd89b6a1d45ac75.webp",
      alt: "Workspace",
    },
    {
      name: "desk-reference.jpg",
      meta: "JPG · 1.1 MB",
      src: "/assets/eb031d20a5dd662f.webp",
      alt: "Desk",
    },
    {
      name: "office-reference.jpg",
      meta: "JPG · 940 KB",
      src: "/assets/d3f9bde61c9a29e7.webp",
      alt: "Office",
    },
  ],
  uploading: {
    title: "sales-dashboard.pdf",
    description: "Uploading · 64%",
  },
  file: {
    title: "message-renderer.tsx",
    description: "TypeScript · 12 KB",
  },
  idle: {
    title: "selected-file.pdf",
    description: "Ready to upload",
  },
  processing: {
    title: "market-research.pdf",
    description: "Processing document",
  },
  error: {
    title: "financial-model.xlsx",
    description: "Upload failed. Try again.",
  },
  done: {
    title: "uploaded-report.pdf",
    description: "Uploaded · 1.8 MB",
  },
  sizes: {
    default: {
      title: "Default attachment",
      description: "PDF · 2.4 MB",
    },
    sm: {
      title: "Small attachment",
      description: "PDF · 2.4 MB",
    },
    xs: {
      title: "Extra small attachment",
    },
  },
} as const;

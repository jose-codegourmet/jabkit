export const collapsibleMocks = {
  default: {
    title: "Order #4189",
    statusLabel: "Status",
    status: "Shipped",
    shippingTitle: "Shipping address",
    shippingAddress: "100 Market St, San Francisco",
    itemsTitle: "Items",
    items: "2x Studio Headphones",
    toggleLabel: "Toggle details",
  },
  basic: {
    trigger: "Product details",
    content:
      "This panel can be expanded or collapsed to reveal additional content.",
    action: "Learn More",
  },
  settings: {
    title: "Radius",
    description: "Set the corner radius of the element.",
    radiusX: "Radius X",
    radiusY: "Radius Y",
    toggleLabel: "Toggle extra radius fields",
  },
} as const;

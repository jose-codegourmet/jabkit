import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  outputFileTracingIncludes: {
    "/**": ["./public/r/**", "./public/previews/**"],
  },
};
export default nextConfig;

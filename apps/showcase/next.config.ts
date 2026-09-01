import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  outputFileTracingIncludes: {
    "/**": ["./public/r/**"],
  },
};
export default nextConfig;

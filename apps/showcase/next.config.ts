import type { NextConfig } from "next";

// Redeploy trigger so Production picks up TubelightNavbar registry.
const nextConfig: NextConfig = {
  typedRoutes: true,
  outputFileTracingIncludes: {
    "/**": ["./public/r/**", "./public/previews/**"],
  },
};
export default nextConfig;

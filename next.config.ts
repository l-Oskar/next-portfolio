import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  typesctipt: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

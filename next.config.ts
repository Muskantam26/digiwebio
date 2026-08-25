import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: ['http://localhost:3000', '10.122.124.182'],
  },
};

export default nextConfig;

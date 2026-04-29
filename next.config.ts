import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel handles static export automatically
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Linting is run explicitly via `npm run lint` with the ESLint CLI.
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

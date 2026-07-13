import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picturepackcdn-h33aaywmsq-ew.a.run.app",
      },
    ],
  },
};

export default nextConfig;

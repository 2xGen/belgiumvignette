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
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "www.belgiumvignette.be" }],
        destination: "https://belgiumvignette.be/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.belgiumvignette.be" }],
        destination: "https://belgiumvignette.be/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

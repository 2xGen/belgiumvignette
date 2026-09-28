import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // disable static prerender for dynamic server-side rendering
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate, max-age=0" },
          { key: "Pragma", value: "no-cache" },
          { key: "Expires", value: "0" },
          { key: "Vary", value: "*" },
        ],
      },
    ];
  },
};

export default nextConfig;
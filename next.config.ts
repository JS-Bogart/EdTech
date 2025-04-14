import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/videos",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

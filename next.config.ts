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
  images: {
    remotePatterns: [new URL("http://img.youtube.com/vi/**")],
  },
};

export default nextConfig;

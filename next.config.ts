import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oekjexfdxxacgkwzluym.supabase.co',
        pathname: '/storage/v1/object/public/media/uploads/**',
      },
    ],
  },
};

export default nextConfig;

import type {NextConfig} from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? '/Partha-Mondal-github.io' : '',
  assetPrefix: isProd ? '/Partha-Mondal-github.io/' : '',
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

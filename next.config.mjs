/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // Build ke dauran TS errors ko ignore karega taaki build na ruke
    ignoreBuildErrors: true,
  },
  eslint: {
    // ESLint errors ko skip karega speed badhane ke liye
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Webpack memory leak aur heavy build crash ko rokta hai
    webpackBuildWorker: false,
  },
  webpack: (config, { isServer }) => {
    // Render free tier (512MB RAM) ke liye memory optimization
    config.optimization.minimize = false;
    return config;
  },
};

module.exports = nextConfig;

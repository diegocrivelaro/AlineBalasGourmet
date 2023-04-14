/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      {
        loader: `@next/font/google`,
        options: {
          subsets: [`latin`],
        },
      },
    ],
  },
};

module.exports = nextConfig;

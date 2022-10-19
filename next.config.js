/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // micro-cmsのドメインを追加
  images: {
    domains: ["images.microcms-assets.io"],
  },
};

module.exports = nextConfig;

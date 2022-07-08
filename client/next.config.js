/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  images: {
    domains: ['image.paysys.kr'],
  },
};

module.exports = nextConfig;

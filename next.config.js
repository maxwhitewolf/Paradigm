/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.paradigm.xyz'],
  },
}

module.exports = nextConfig

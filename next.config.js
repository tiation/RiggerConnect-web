/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for Netlify SSR support
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true
  },
  // Add experimental features for better Netlify support
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig

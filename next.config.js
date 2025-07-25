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
    serverActions: {
      enabled: true
    }
  },
  // Exclude the React app from Next.js build
  pageExtensions: ['tsx', 'ts', 'jsx', 'js']
}

module.exports = nextConfig

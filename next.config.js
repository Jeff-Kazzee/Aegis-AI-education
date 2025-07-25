/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  // Optimized for Vercel deployment with API routes
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig
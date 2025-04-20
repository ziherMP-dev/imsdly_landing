/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  output: 'export',
  // Skip assets with server components to avoid errors
  skipTrailingSlashRedirect: true, 
  skipMiddlewareUrlNormalize: true,
  trailingSlash: true,
}

export default nextConfig

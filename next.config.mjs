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
  output: 'export',
  trailingSlash: true,
  // Disable server-side features for static export
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // Handle dynamic routes
  generateStaticParams: async () => {
    return []
  },
}

export default nextConfig

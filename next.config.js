import { withContentlayer } from 'next-contentlayer2'
import { withNextVideo } from 'next-video/process'

import('./env.mjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me'
      }
    ]
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client']
  }
}

export default withContentlayer(withNextVideo(nextConfig))

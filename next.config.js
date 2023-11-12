/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
      },
      {
        protocol: 'https',
        hostname: 'media.discordapp.net'
      },
    {
      protocol: 'https',
      hostname: 'discord.c99.nl'
    }
    ],
  },
}

module.exports = nextConfig

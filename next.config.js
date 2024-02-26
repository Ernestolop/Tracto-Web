/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'scontent.**',
              port: '',
            },
          ],
    },
}

module.exports = nextConfig

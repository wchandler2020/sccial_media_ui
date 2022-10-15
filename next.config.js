/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['st.depositphotos.com', 'scontent-ort2-2.xx.fbcdn.net', 'images.pexels.com']
  }
}

module.exports = nextConfig

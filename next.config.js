/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

const nextConfig =  {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/test123',
        destination: "/",
      },
      {
        source: '/test456',
        destination: "https://google.com/",
      }
    ];
  }
}

module.exports =  nextConfig
module.exports = nextTranslate()

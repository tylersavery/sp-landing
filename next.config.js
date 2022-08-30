/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    
  }
}

module.exports = nextConfig
module.exports = nextTranslate()
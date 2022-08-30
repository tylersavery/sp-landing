/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig =  {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  }
}

module.exports =  nextConfig
module.exports = nextTranslate()
module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],
  // your other plugins here
]);
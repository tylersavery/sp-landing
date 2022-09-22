/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

const nextConfig =  {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['english', 'espanol'],
    defaultLocale: 'english',
  },
  async redirects() {
    return [
      {
        source: '/en/story/:uuid',
        destination: "https://app.storyplace.com/story/:uuid",
        permanent: true,
      },
      {
        source: '/es/story/:uuid',
        destination: "https://app.storyplace.com/story/:uuid",
        permanent: true,
      },
      {
        source: '/en/profile/:username',
        destination: "https://app.storyplace.com/profile/:username",
        permanent: true,
      },
      {
        source: '/es/profile/:username',
        destination: "https://app.storyplace.com/profile/:username",
        permanent: true,
      },
  
    ];
  }
}

module.exports =  nextConfig
module.exports = nextTranslate({
  ...nextConfig
})

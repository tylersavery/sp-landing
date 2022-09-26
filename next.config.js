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
        source: '/es',
        destination: "/espanol",
        permanent: true,
      },
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
      {
        source: '/en/topic/:id',
        destination: "https://app.storyplace.com/app/explore/stories/topic/:id",
        permanent: true,
      },
      {
        source: '/es/topic/:id',
        destination: "https://app.storyplace.com/app/explore/stories/topic/:id",
        permanent: true,
      },
      {
        source: '/en/explore',
        destination: "https://app.storyplace.com/app/explore",
        permanent: true,
      },
      {
        source: '/es/explore',
        destination: "https://app.storyplace.com/app/explore",
        permanent: true,
      },
      {
        source: '/en/terms',
        destination: "https://old.storyplace.com/en/terms",
        permanent: true,
      },
      {
        source: '/es/terms',
        destination: "https://old.storyplace.com/es/terms",
        permanent: true,
      },
      {
        source: '/en/privacy',
        destination: "https://old.storyplace.com/en/privacy",
        permanent: true,
      },
      {
        source: '/es/privacy',
        destination: "https://old.storyplace.com/es/privacy",
        permanent: true,
      },
      {
        source: '/en/contact',
        destination: "https://old.storyplace.com/en/contact",
        permanent: true,
      },
      {
        source: '/es/contact',
        destination: "https://old.storyplace.com/es/contact",
        permanent: true,
      },
  
    ];
  }
}

module.exports =  nextConfig
module.exports = nextTranslate({
  ...nextConfig
})

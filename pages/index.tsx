import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Image from 'next/image'
import AboutSection from '../components/about-section'
import AmbassadorSection from '../components/ambassador-section'
import Footer from '../components/Footer'
import Header from '../components/header'
import OurStorySection from '../components/our-story-section'
import TopSection from '../components/top-section'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const title = "Storyplace";
  const description = "Storyplace is an empathy-driven social platform where you can share and read stories from people around the world.";

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical="https://new.storyplace.com"
        openGraph={{
          url: "https://new.storyplace.com",
          title: title,
          description: description,
          images: [{
            url: "https://storyplace-cdn.s3.amazonaws.com/asset/image/4adca168-211c-43bd-ad55-890de96452f1/og.jpg",
            width: 1640,
            height: 924,
            alt: 'Storyplace',
            type: 'image/jpeg',
          }],
          site_name: "Storyplace",

        }}
        twitter={{
          handle: "@mystoryplace"
        }}
      />
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4E1CA9" />
        <meta name="theme-color" content="#441dac" />
      </Head>
      <main>

        <Header />
        <TopSection />
        <AboutSection />
        <OurStorySection />
        <AmbassadorSection />
        <Footer />


      </main>
    </>
  )
}

export default Home

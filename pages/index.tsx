import type { NextPage } from 'next'
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
  return (
    <main>

      <Header />
      <TopSection />
      <AboutSection />
      <OurStorySection />
      <AmbassadorSection />
      <Footer />


    </main>
  )
}

export default Home

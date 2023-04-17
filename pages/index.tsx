import type { NextPage } from 'next'
import AboutSection from '../components/about-section'
import AmbassadorSection from '../components/ambassador-section'
import Footer from '../components/Footer'
import Header from '../components/header'
import OurStorySection from '../components/our-story-section'
import TopSection from '../components/top-section'
import HowItWorks from '../components/how-it-works-section'
import StoriesSection from '../components/stories-section'
import BottomSection from '../components/bottom-section'
import { AppHead } from '../components/app-head'

const Home: NextPage = () => {


  return (
    <>
      <AppHead />

      <main>

        <Header />
        <TopSection />
        <AboutSection />
        <HowItWorks />
        <StoriesSection />
        <OurStorySection />
        <AmbassadorSection />
        <BottomSection />
        <Footer />


      </main>
    </>
  )
}

export default Home

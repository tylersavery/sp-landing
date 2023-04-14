import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import AboutSection from '../components/about-section'
import AmbassadorSection from '../components/ambassador-section'
import Footer from '../components/Footer'
import Header from '../components/header'
import OurStorySection from '../components/our-story-section'
import TopSection from '../components/top-section'
import styles from '../styles/Home.module.scss'
import HowItWorks from '../components/how-it-works-section'
import StoriesSection from '../components/stories-section'
import BottomSection from '../components/bottom-section'

const Home: NextPage = () => {
  const title = "Storyplace - The Social Journal";

  const description = "Storyplace is the world's best social journaling app that connects your digital journal to people around the world. Storyplace is designed to help enhance your emotional wellbeing by sharing and reading other people's stories. We offer tools to get you inspired with writing prompts, topics and challenges that will help you maintain a healthy journaling habit.";

  const keywords = ['storyplace', 'journaling', 'social media', 'social journaling', 'storytelling', 'diary', 'journal entry', 'blog', 'blogging', 'blogger', 'wattpad', 'medium', 'writing', 'writer', 'writing tips', 'journaling tips', 'journaling prompts', 'community', 'best app for journaling']
  const image = "https://storyplace-cdn.s3.amazonaws.com/asset/image/4adca168-211c-43bd-ad55-890de96452f1/og.jpg";
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical="https://new.storyplace.com"
        additionalMetaTags={[{ property: "keywords", content: keywords.join(',') }, { property: "twitter:title", content: title, }, { property: "twitter:description", content: description }, { property: "twitter:image", content: image }]}

        openGraph={{
          url: "https://new.storyplace.com",
          title: title,
          description: description,
          images: [{
            url: image,
            width: 1640,
            height: 924,
            alt: 'Storyplace',
            type: 'image/jpeg',
          }],
          site_name: "Storyplace",

        }}
        twitter={{
          handle: "@mystoryplace",

        }}
      />
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2B1B64" />
        <meta name="facebook-domain-verification" content="vtbfkl4mfgpe37j06m76t92zooob90" />

        <meta name="theme-color" content="#2B1B64" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9WC0BDHRBK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9WC0BDHRBK');
        `}
      </Script>

      <Script id="intercom">
        {`
          var APP_ID = "ab5k9vz9";

          window.intercomSettings = {
              app_id: APP_ID
            };
          (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + APP_ID;var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
          
        `}
      </Script>
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

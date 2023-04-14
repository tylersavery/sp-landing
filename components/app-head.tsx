import { NextSeo } from "next-seo"
import Head from "next/head"
import Script from "next/script"



export const AppHead = () => {
    const title = "Storyplace: Where journaling meets community.";

    const description = "Storyplace is a social journaling app that offers a safe space for you to express yourself while connecting with a community of people around the world. Our goal is to help enhance your emotional wellbeing, embrace vulnerability, and help you process whatever is going on in your life.";

    const image = "https://www.storyplace.com/images/og.jpg?v=2";

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical="https://storyplace.com"
                additionalMetaTags={[{ property: "keywords", content: "stories, journaling, journal, writing, reading, community, empathy, therapy, storytelling, diary" }, { property: "twitter:title", content: title, }, { property: "twitter:description", content: description }, { property: "twitter:image", content: image }]}

                openGraph={{
                    url: "https://storyplace.com",
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
        </>
    )
}
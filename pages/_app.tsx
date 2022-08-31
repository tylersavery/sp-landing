import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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

      <Component {...pageProps} />
    </>
  );
}

export default MyApp

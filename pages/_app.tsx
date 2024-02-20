import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="G-D7CJXYN6N8" />


    </>
  );
}

export default MyApp

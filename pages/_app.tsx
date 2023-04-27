import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import NextNProgress from 'nextjs-progressbar';

import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  <NextNProgress
        color="#4CBD49"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        options={{
          showSpinner: false,
          trickleSpeed: 50,
          minimum: 0.1,
          easing: 'ease',
          // speed: 500
        }}
  />
  return <Component {...pageProps} />
}

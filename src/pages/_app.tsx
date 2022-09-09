import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'knit-hutchida/lib/style.css'
import { Navigation } from 'knit-hutchida';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation title='HUTCHIDA' links={[
        { url: '#about', displayName: 'About' },
        { url: '#portfolio', displayName: 'Portfolio' }
      ]} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'knit-hutchida/lib/style.css'
import { Navigation } from 'knit-hutchida';

if (typeof window !== 'undefined') {
  const { StoryblokBridge, location } = window
  const storyblokInstance = new StoryblokBridge()

  storyblokInstance.on(['published', 'change'], () => {
    // reload page if save or publish is clicked
    location.reload(true)
  })
}




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

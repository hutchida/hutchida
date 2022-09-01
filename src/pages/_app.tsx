import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'knit-hutchida/lib/style.css'
import Feature from '../components/Feature';
import Slide from '../components/Slide';
import Page from '../components/Page';

import { storyblokInit, storyblokEditable, apiPlugin } from '@storyblok/react';
const SlideContainer = (blok: any) => {
  console.log("blok", blok)
  return (
    <div
      {...storyblokEditable(blok)}
      key={blok._uid}>
      <Slide {...blok.blok}></Slide>
    </div>)
}
const components = {
  feature: Feature,
  slide: SlideContainer,
  page: Page,
};

storyblokInit({
  accessToken: '1JIP9C8i6yPABNQVN9aWIwtt',
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

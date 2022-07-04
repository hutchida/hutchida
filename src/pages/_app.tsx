import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { storyblokInit, apiPlugin } from '@storyblok/react';

import Feature from '../components/Feature';
import Slide from '../components/Slide';

const components = {
  feature: Feature,
  slide: Slide,
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

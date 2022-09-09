import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="//app.storyblok.com/f/storyblok-v2-latest.js" type="text/javascript">
        </script>
      </body>
    </Html>
  )
}
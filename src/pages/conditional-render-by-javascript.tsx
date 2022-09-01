
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ByJavascript } from 'knit-hutchida/lib'
import { GetStaticProps } from "next";


export const getStaticProps: GetStaticProps = async () => {
  const pageData = null;
  return {
    props: {
      pageData: pageData || null,
    },
  };
}

const Home = (props: any) => {
  const components = props?.pageData?.body
  return (
    <div className={styles.container}>
      <Head>
        <title>HUTCHIDA</title>
        <meta name="description" content="HUTCHIDA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ByJavascript isMobile />
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home

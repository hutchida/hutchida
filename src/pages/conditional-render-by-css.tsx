
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ByCSS, ByJavascript } from 'knit-hutchida/lib'
import { GetStaticProps } from "next";


export const getStaticProps: GetStaticProps = async () => {
  const pageData = null;
  return {
    props: {
      sampleText: 'Buenas dias'
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
      <h1>{props.sampleText}</h1>
      <ByCSS />
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home

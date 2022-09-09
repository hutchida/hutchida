
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { TweetGrid } from 'knit-hutchida/lib'
import { tileData } from '../lib/tweet-data'
import { GetStaticProps } from "next";
import PageComponentMapper from '../lib/mappers/pageComponentMapper'
import { getPageData } from '../lib/getters/getPageData';
/**
 * When the user navigates to the root of the site this page will be delivered. It is hardcoded
 * to fetch data for a page called 'homepage' in the cms
 * @returns
 */

export const getStaticProps: GetStaticProps = async () => {
  // const pageData = await getPageData('home');
  const pageData = null;
  return {
    props: {
      pageData: pageData || null,
    },
  };
}

const args = {
  config: {
    size: 'sm',
    colorMap: {
      0: { 'heavy': 'red', 'light': 'pink' },
      1: { 'heavy': 'orange', 'light': 'peachpuff' },
      2: { 'heavy': 'palegreen', 'light': 'honeydew' },
    }
  }, data: tileData
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
      <TweetGrid {...args} />
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home

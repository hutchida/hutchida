
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Section, EventsAccordion, Slide, Splash } from 'knit-hutchida/lib'
import data from '../lib/cv.json'
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

const Home = (props: any) => {
  const components = props?.pageData?.body
  return (
    <div className={styles.container}>
      <Head>
        <title>HUTCHIDA</title>
        <meta name="description" content="HUTCHIDA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Splash
          profilePic={'images/profilepic.jpeg'}
          subtitle={'Frontend Developer'}
          title={'Daniel Hutchings'}
          oneliner={'Frontend Developer, DIY Fundamentalist, dreams in JSON...'}
          bgColor={'#ffffff'}
          socials={[
            {
              link: {
                url: 'https://www.linkedin.com/in/danielmhutchings/',
                target: '_blank',
              },
              name: 'LinkedIn',
              abbreviation: 'LI',
              icon: 'images/linkedin.svg',
            },
            {
              link: {
                url: 'https://www.github.com/hutchida',
                target: '_blank',
              },
              name: 'GitHub',
              abbreviation: 'GH',
              icon: 'images/github.svg',
            }
          ]}
        />
        {/* <h1 className={styles.title}>
          HUTCHIDA
        </h1>
        <PageComponentMapper components={components} />
        <Section>
          HIYA
        </Section>
        <Section className={styles.section}>
          <p className={styles.oneLiner}>{data?.oneLiner}</p>
        </Section>
        <Section className={styles.section} bgColor={"lightblue"}>
          <EventsAccordion {...{ props: { title: 'Experience' }, data: data.experience, }} />
        </Section> */}
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home

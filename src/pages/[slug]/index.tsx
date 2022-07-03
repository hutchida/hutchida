
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Section, EventsAccordion, Slide } from 'knit-hutchida/lib'
import data from '../../lib/cv.json'
import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import PageComponentMapper from '../../lib/mappers/pageComponentMapper'
import { getPageData } from '../../lib/getters/getPageData';
import { getPublishedPagesPaths } from "../../lib/getters/getPageData";

/**
 * When the user navigates to the root of the site this page will be delivered. It is hardcoded
 * to fetch data for a page called 'homepage' in the cms
 * @returns
 */


export const getStaticPaths: GetStaticPaths = async () => {
  const all_paths = await getPublishedPagesPaths();
  const paths = all_paths.map((page: any) => ({
    params: { slug: page.slug },
  }))

  return {
    paths,
    fallback: false // false or 'blocking'
  };
}


export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;
  const pageData = await getPageData(slug || 'home');
  console.log('pageData', pageData)

  return {
    props: {
      pageData: pageData || null,
    },
  };
}

const Home = (props: any) => {
  console.log('props', props)
  const slideData = props?.pageData?.body[0]
  const components = props?.pageData?.body
  return (
    <div className={styles.container}>
      <Head>
        <title>HUTCHIDA</title>
        <meta name="description" content="HUTCHIDA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          HUTCHIDA
        </h1>
        <PageComponentMapper components={components} />
        <Section>
          <Slide
            title={slideData.title}
            description={slideData.description}
            descriptionSize={slideData.descriptionSize}
            bgImage={slideData.bgImage}
            bgColor={slideData.bgColor}
            slideWidth={slideData.slideWidth}
            slideHeight={slideData.slideHeight}
            spacing={slideData.spacing}
          />
        </Section>
        <Section className={styles.section}>
          <p className={styles.oneLiner}>{data?.oneLiner}</p>
        </Section>
        <Section className={styles.section} bgColor={"lightblue"}>
          <EventsAccordion {...{ props: { title: 'Experience' }, data: data.experience, }} />
        </Section>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
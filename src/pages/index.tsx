import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Section, EventsAccordion, Slide } from 'knit-hutchida/lib'
import data from '../lib/cv.json'
import StoryblokClient from 'storyblok-js-client'
import { GetStaticProps } from "next";

const Storyblok = new StoryblokClient({
  accessToken: '1JIP9C8i6yPABNQVN9aWIwtt',
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})


/**
 * When the user navigates to the root of the site this page will be delivered. It is hardcoded
 * to fetch data for a page called 'homepage' in the cms
 * @returns
 */

export const getStaticProps: GetStaticProps = async (context) => {
  async function getPageData() {
    let data;
    try {
      data = await Storyblok.get('cdn/stories/vue-js-conference-2022?cv=1595529854', {})
    } catch (error: any) {
      console.log(error);
    }
    return data?.data?.story?.content
  }

  const pageData = await getPageData();
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

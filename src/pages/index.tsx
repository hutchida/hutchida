import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Section, EventsAccordion } from 'knit-hutchida/lib'
import data from '../lib/cv.json'

const Home: NextPage = () => {
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

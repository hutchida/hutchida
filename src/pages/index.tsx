
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Section, EventsAccordion, Slide, Splash, HorizontalBar, Navigation } from 'knit-hutchida/lib'
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

console.log('skills', data.skills)

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
        <Navigation title='HUTCHIDA' links={[
          { url: '#about', displayName: 'About' },
          { url: '#portfolio', displayName: 'Portfolio' }
        ]} />
        <Splash
          profilePic={'images/profilepic.jpeg'}
          subtitle={''}
          title={'Daniel Hutchings'}
          oneliner={'Hands-on Frontend Developer, with a twist of Python, dreams in JSON, currently working for AKQA, based in Berlin...'}
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
            },
            {
              link: {
                url: 'https://codepen.io/hutchida',
                target: '_blank',
              },
              name: 'Codepen',
              abbreviation: 'CP',
              icon: 'images/codepen.svg',
            }
          ]}
        />
        {/* <PageComponentMapper components={components} /> */}
        {/* <Section>
          <div style={{ padding: "4rem 0 2rem" }}>
            Hello, my name is Daniel Hutchings and I'm a front-end web developer for AKQA Berlin,
            primarily working with React and Next JS to build enterprise websites for global brands.
            Before joining the agency world I worked a lot with Python helping companies automate
            processes.
          </div>
          <div style={{ padding: "2rem 0 4rem" }}>
            I often refer to myself as a "DIY fundamentalist", as there are so many things you can do yourself with 
            a little bit of knowledge and determination. 
          </div>
        </Section>
        <Section className={styles.section}>
          <p className={styles.oneLiner}>{data?.oneLiner}</p>
        </Section>
        <Section className={styles.section} bgColor={"lightblue"}>
          <EventsAccordion {...{ props: { title: 'Experience' }, data: data.experience, }} />
        </Section> */}

      </main>
      {/* {data.skills.map((skill: any) => {

        console.log('skill', skill)
        return (<HorizontalBar {...skill} />)
      })} */}
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home


import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Section, EventsAccordion, Slide } from 'knit-hutchida/lib'
import data from '../../lib/cv.json'
import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import PageComponentMapper from '../../lib/mappers/pageComponentMapper'
import { getBlogPageData } from '../../lib/getters/getBlogPageData';
import { getPublishedBlogPagesPaths } from "../../lib/getters/getBlogPageData";


export const getStaticPaths: GetStaticPaths = async () => {
  const all_paths = await getPublishedBlogPagesPaths();
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
  const blogPageData = await getBlogPageData(slug);
  let params = {
    version: 'published', // or 'draft'
  };

  if (context.preview) {
    params.version = 'draft';
  }

  return {
    props: {
      blogPageData: blogPageData || null
    },
    revalidate: 3600,
  };
}

const Page = (props: any) => {

  console.log('props', props)
  return (
    <main className="px-6" >
      HI
    </main>
  );
}

export default Page

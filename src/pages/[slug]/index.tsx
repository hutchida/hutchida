
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Section, EventsAccordion, Slide } from 'knit-hutchida/lib'
import data from '../../lib/cv.json'
import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import PageComponentMapper from '../../lib/mappers/pageComponentMapper'
import { getPageData } from '../../lib/getters/getPageData';
import { getPublishedPagesPaths } from "../../lib/getters/getPageData";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
  storyblokEditable,
  SbBlokData,
} from '@storyblok/react';

/**
 * When the user navigates to the root of the site this page will be delivered. It is hardcoded
 * to fetch data for a page called 'homepage' in the cms
 * @returns
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const allRootPaths = await getPublishedPagesPaths();
  let paths = allRootPaths.map((page: any) => ({
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
  const components = pageData.body
  let params = {
    version: 'published', // or 'draft'
  };

  if (context.preview) {
    params.version = 'draft';
  }

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, params);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      preview: context.preview || false,
      components
    },
    revalidate: 3600,
  };
}

const Home = ({ story, preview, components }: any) => {
  story = useStoryblokState(story, {}, preview);
  console.log('components', components)
  return (
    <main className="px-6" >
      {/* <StoryblokComponent blok={story.content} /> */}
      <PageComponentMapper components={components} />
    </main>
  );
}

export default Home

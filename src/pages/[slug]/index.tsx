
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
  // const pageData = await getPageData(slug || 'home');

  let params = {
    version: 'published', // or 'draft'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, params);
  return {
    props: {
      content: data ? data.story.content : false,
      key: data ? data.story.id : false,
    },
  };
}

const Home = ({ content }: any) => {
  content = useStoryblokState(content);
  return (
    <main className="px-6" {...storyblokEditable(content)} key={content._uid}>
      {content.body.map((nestedBlok: SbBlokData) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}

export default Home

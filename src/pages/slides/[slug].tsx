import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import PageComponentMapper from '../../lib/mappers/pageComponentMapper'
import { getPageData } from '../../lib/getters/getPageData';
import { getPublishedSlideshowPaths } from "../../lib/getters/getPageData";
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
  const allSlideshowPaths = await getPublishedSlideshowPaths();
  const paths = allSlideshowPaths.map((page: any) => {
    return ({
      params: { slug: page.slug },
    })
  })

  return {
    paths,
    fallback: false
  };
}


export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;
  const pageData = await getPageData(`slides/${slug}` || 'home');
  const components = pageData.body
  let params = {
    version: 'published', // or 'draft'
  };

  if (context.preview) {
    params.version = 'draft';
  }

  return {
    props: {
      preview: context.preview || false,
      components
    },
    revalidate: 3600,
  };
}

const Home = ({ story, preview, components }: any) => {
  story = useStoryblokState(story, {}, preview);
  return (
    <main className="px-6" >
      <PageComponentMapper components={components} />
    </main>
  );
}

export default Home

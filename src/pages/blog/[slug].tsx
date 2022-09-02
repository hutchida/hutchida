import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import { getBlogPageData } from '../../lib/getters/getBlogPageData';
import { getPublishedBlogPagesPaths } from "../../lib/getters/getBlogPageData";
import { Navigation, BlogPost } from 'knit-hutchida/lib'

export const getStaticPaths: GetStaticPaths = async () => {
  const all_paths = await getPublishedBlogPagesPaths();
  const paths = all_paths.map((page: any) => ({
    params: { slug: page.slug },
  }))

  return {
    paths,
    fallback: false
  };
}


export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;
  const blogPageData = await getBlogPageData(slug);
  let params = {
    version: 'published',
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
  return (<BlogPost {...props.blogPageData[0]} />);
}

export default Page

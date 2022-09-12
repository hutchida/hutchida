import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import { getBlogPageData } from '../../lib/getters/getDatoCMSData';
import { getPublishedBlogPagesPaths } from "../../lib/getters/getDatoCMSData";
import { BlogPost } from 'knit-hutchida/lib'

export const getStaticPaths: GetStaticPaths = async () => {
  const allBlogs = await getPublishedBlogPagesPaths();
  const paths = allBlogs.map((page: any) => ({
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

  return (<BlogPost {...props.blogPageData[0]} />);
}

export default Page

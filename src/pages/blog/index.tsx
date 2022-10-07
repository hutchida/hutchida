import { GetStaticProps } from "next/types";
import { getPublishedBlogPagesPaths } from "../../lib/getters/getDatoCMSData";
import { PostsRoll } from "knit-hutchida";

export const getStaticProps: GetStaticProps = async (context) => {

  let allBlogs = await getPublishedBlogPagesPaths();
  const paths = allBlogs.map((page: any) => ({
    params: { slug: page.slug },
  }))
  console.log('paths', paths);
  console.log('allBlogs', allBlogs);

  return {
    props: {
      allBlogs: allBlogs || null
    },
    revalidate: 3600,
  };
}


const BlogLandingPage = (props: any) => {
  return (<div>
    <h1>Here's all the blogs I have....</h1>
    <PostsRoll posts={props.allBlogs} />

  </div>);
}

export default BlogLandingPage

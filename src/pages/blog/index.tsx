import { GetStaticProps } from "next/types";
import { getPublishedBlogPagesPaths } from "../../lib/getters/getDatoCMSData";

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
  console.log("allBlogs", props.allBlogs)
  return (<div>
    <h1>Here's all the blogs I have....</h1>
    {props.allBlogs.map((blog: any, index: number) =>
      <div key={index}>
        <h2><a href={`${blog.slug}`} target="_self">{blog.title}</a></h2>
        <h3>{blog.summary}</h3>
      </div>
    )}
  </div>);
}

export default BlogLandingPage

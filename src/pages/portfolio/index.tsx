import { GetStaticProps } from "next/types";
import { getPublishedBlogPagesPaths } from "../../lib/getters/getDatoCMSData";

export const getStaticProps: GetStaticProps = async (context) => {

  let allBlogs = await getPublishedBlogPagesPaths();
  const portfolio = allBlogs?.filter((blog: any) => blog?.portfolioInclude)

  return {
    props: {
      portfolio: portfolio || null
    },
    revalidate: 3600,
  };
}


const PortfolioLandingPage = (props: any) => {
  return (<div>
    <h1>Welcome to my portfolio. Here is a selection...</h1>
    {props.portfolio.map((page: any, index: number) =>
      <div key={index}>
        <h2><a href={`${page.slug}`} target="_self">{page.title}</a></h2>
        <h3>{page.summary}</h3>
      </div>
    )}
  </div>);
}

export default PortfolioLandingPage

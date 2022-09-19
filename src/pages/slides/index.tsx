import { GetStaticProps } from "next/types";
import { getPublishedSlideshowPaths } from "../../lib/getters/getPageData";

export const getStaticProps: GetStaticProps = async (context) => {

  const allSlideshowPaths = await getPublishedSlideshowPaths();

  return {
    props: {
      slideshows: allSlideshowPaths || null
    },
    revalidate: 3600,
  };
}

const SlideshowsLandingPage = (props: any) => {
  console.log('props', props)
  return (<div>
    <h1>Welcome to my Slideshows. Here is a bunch of slideshows I've put together about various technologies and presented them to my team...</h1>
    {props.slideshows.map((slideshow: any, index: number) =>
      <div key={index}>
        <h2><a href={`${slideshow.slug}`} target="_self">{slideshow.title}</a></h2>
        <h3>{slideshow.summary}</h3>
      </div>
    )}
  </div>);
}

export default SlideshowsLandingPage

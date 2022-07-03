import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
  accessToken: '1JIP9C8i6yPABNQVN9aWIwtt',
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})

export async function getPageData(slug: string) {
  let data;
  try {
    // put the cv back in when you want the data cached
    // data = await Storyblok.get(`cdn/stories/${slug}?cv=157041632`, {})
    data = await Storyblok.get(`cdn/stories/${slug}`, {})
  } catch (error: any) {
    console.log(error);
  }
  return data?.data?.story?.content
}



export async function getPublishedPagesPaths(  
  ) {
    let data;
    try {
      data = await Storyblok.get(`cdn/stories/`, {})
    } catch (error: any) {
      console.log(error);
    }
    return data?.data?.stories
   
}

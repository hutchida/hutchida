import { QUERY_PAGE_COMPONENTS } from '../queries/queryPageComponents'
import { QUERY_PUBLISHED_PAGES_PATHS } from '../queries/queryPageComponents'

export async function getBlogPageData(slug: string) {
  let data;
  try { 
    data = await fetch(
      'https://graphql.datocms.com/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${process.env.DATOCMS_TOKEN}`,
        },
        body: JSON.stringify({
          query: QUERY_PAGE_COMPONENTS(slug)
        }),
      }
    )
    .then(res => res.json())
    } catch (error: any) {
      console.log(error);
    }
    // @TODO to improve: if data.errors => something's wrong with the query
  
    if(data?.errors) {
      console.error(data.errors);
    }
    return data?.data?.allPages?.[0]?.content;
}


export async function getPublishedBlogPagesPaths(  
  published?: true
  ) {
let data:any = {};
try { 
  data = await fetch(
    'https://graphql.datocms.com/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.DATOCMS_TOKEN}`,
      },
      body: JSON.stringify({
        query: QUERY_PUBLISHED_PAGES_PATHS(true)
      }),
    }
  )
  .then(res => res.json())
  } catch (error: any) {
    console.log(error);    
  }
  // @TODO to improve: if data.errors => something's wrong with the query
  console.log('publishedPages',data)
  return data?.data?.allPages;
   
}
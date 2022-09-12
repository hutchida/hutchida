import {
  QUERY_PAGE_COMPONENTS,
  QUERY_BLOG_COMPONENTS,
  QUERY_PUBLISHED_BLOG_PATHS
} from '../queries/queryPageComponents'

export async function getPageData(slug: string) {
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
  
    if(data?.errors) {
      console.error(data.errors);
    }
    return data?.data?.allPages?.[0]?.content;
}


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
          query: QUERY_BLOG_COMPONENTS(slug)
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
    return data?.data?.allBlogs?.[0]?.content;
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
        query: QUERY_PUBLISHED_BLOG_PATHS(true)
      }),
    }
  )
  .then(res => res.json())
  } catch (error: any) {
    console.log(error);    
  }
  // @TODO to improve: if data.errors => something's wrong with the query
  return data?.data?.allBlogs;
   
}
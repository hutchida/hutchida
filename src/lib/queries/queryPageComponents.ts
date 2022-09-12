export const QUERY_PAGE_COMPONENTS = (
  slug: string
) => `{
  allPages(filter: {slug: {eq: "${slug}"}}) {
    id
    title
    slug
    content {
      __typename
      date
      id
      info
      subject
      text
      inportfolio
    }
  }
}
`;

export const QUERY_BLOG_COMPONENTS = (
  slug: string
) => `{
  allBlogs(filter: {slug: {eq: "${slug}"}}) {
    id
    title
    content {
      __typename
      date
      id
      info
      subject
      text
      inportfolio
    }
  }
}
`;

export const QUERY_PUBLISHED_BLOG_PATHS = (published: boolean = true) => `{
  allBlogs {
    id
    slug        
  }
}
`;


export const QUERY_PUBLISHED_PAGES_PATHS = (published: boolean = true) => `{
  allPages {
    id
    slug        
  }
}
`;

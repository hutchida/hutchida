export const QUERY_PAGE_COMPONENTS = (
  slug: string
) => `{
  allPages(filter: {slug: {eq: "${slug}"}}) {
    id
    title
    slug
    content {
      ... on SplashRecord {
        __typename
        id
        bgcolor
        oneliner
        subtitle
        title
        heroImage {
          responsiveImage(
            imgixParams: { fit: crop, w: 1000, auto: format }
          ) {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            bgColor
            base64
          }
        }
        backgroundImage {
          responsiveImage(
            imgixParams: { fit: crop, w: 1000, auto: format }
          ) {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            bgColor
            base64
          }
        }
        socials {
          link {
            displayName
            target
            url
          }
          id
          abrreviation
          name
          icon {
            responsiveImage {
              src
            }
          }
        }
      }
      ... on SketchboxRecord {
        __typename
        id
        alignment
        description
        opacity
      }
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

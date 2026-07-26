export const BLOG_CARD_CONFIG = {
  image: {
    width: 364,
    height: 208,
    loading: 'lazy' as const,
  },
  dateFormat: 'dd MMMM yyyy',
  labels: {
    commentPrefix: 'Comment',
    readMore: 'Read More',
    unknownAuthor: 'Unknown author',
    readTimeSuffix: 'min read',
  },
} as const;

export type BlogCardConfig = typeof BLOG_CARD_CONFIG;
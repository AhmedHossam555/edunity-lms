import { IBlogCard, IBlogSectionCopy } from '../interfaces';

// ─────────────────────────────────────────────────────────────
// Blog section heading content
// ─────────────────────────────────────────────────────────────
export const BLOG_SECTION_COPY: IBlogSectionCopy = {
  subtitle: 'ALL BLOG POST',
  title: 'Most Popular Post.',
};

// ─────────────────────────────────────────────────────────────
// Blog cards
// Static data used to render the blog card grid.
// ─────────────────────────────────────────────────────────────
export const BLOG_CARDS: IBlogCard[] = [
  {
    id: 'group-students-outdoor',
    imageSrc: '/assets/images/home/blogs-section/group-students-outdoor.webp',
    imageAlt: 'Blog',
    publishedDate: '21 April 2023',
    commentCount: 6,
    title:
      'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat',
  },
  {
    id: 'older-couple-library',
    imageSrc: '/assets/images/home/blogs-section/older-couple-library.webp',
    imageAlt: 'Blog',
    publishedDate: '21 April 2023',
    commentCount: 6,
    title:
      'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat',
  },
  {
    id: 'students-cafe-laptops',
    imageSrc: '/assets/images/home/blogs-section/students-cafe-laptops.webp',
    imageAlt: 'Blog',
    publishedDate: '21 April 2023',
    commentCount: 6,
    title:
      'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat',
  },
];
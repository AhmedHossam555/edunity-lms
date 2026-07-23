import { IBlog } from "../interfaces";


export const MOCK_BLOGS: IBlog[] = [
  // ─────────────────────────────────────────────
  // Blog Post 1 - Featured
  // ─────────────────────────────────────────────
  {
    id: 'b1',
    title: '21 April 2024    Comment (06)',
    slug: '21-april-2024-comment-06',
    excerpt: 'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat',
    content: `
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo.
      </p>
      <blockquote
        style="
          margin:20px 0;
          padding:16px 20px;
          border-left:4px solid #7768E5;
          background:#F8FAFC;
          color:#475569;
          font-size:15px;
          line-height:1.8;
          font-style:italic;
          border-radius:8px;
        ">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
      </blockquote>
      <ul
        style="
          margin:0;
          padding-left:20px;
          color:#334155;
          font-size:16px;
          line-height:1.8;
        ">
        <li style="margin-bottom:10px;">✔ Lorem ipsum dolor sit amet</li>
        <li style="margin-bottom:10px;">✔ Consectetur adipiscing elit</li>
        <li style="margin-bottom:10px;">✔ Sed do eiusmod tempor incididunt</li>
        <li style="margin-bottom:0;">✔ Ut labore et dolore magna aliqua</li>
      </ul>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=450&fit=crop',
    featuredImageAlt: 'Blog post featured image',
    author: {
      id: 'au1',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108379-be9c2b0e5b41?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'Sarah Johnson avatar',
      title: 'Senior Content Writer',
      bio: 'Passionate about technology and education.',
      socialLinks: {
        twitter: 'https://twitter.com/sarahj',
        linkedin: 'https://linkedin.com/in/sarahj'
      }
    },
    category: {
      id: 'cat1',
      name: 'Technology',
      slug: 'technology'
    },
    tags: [
      { id: 'tag1', name: 'Programming', slug: 'programming' },
      { id: 'tag2', name: 'Web Development', slug: 'web-development' }
    ],
    meta: {
      views: 1247,
      readTime: 5,
      wordCount: 1250,
      isFeatured: true,
      isPublished: true,
      publishedAt: new Date('2024-04-21'),
      seoTitle: '21 April 2024 - Blog Post',
      seoDescription: 'Velit esse cillum dolore eu fugiat nulla pariatur',
      seoKeywords: ['blog', 'technology', 'development']
    },
    comments: [
      {
        id: 'c1',
        userId: 'u1',
        userName: 'Alice Johnson',
        userAvatar: 'https://images.unsplash.com/photo-1494790108379-be9c2b0e5b41?w=100&h=100&fit=crop',
        content: 'Great article! Really insightful.',
        createdAt: new Date('2024-04-22'),
        likes: 12,
        replies: [
          {
            id: 'c1r1',
            userId: 'u2',
            userName: 'Bob Smith',
            userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
            content: 'I completely agree with Alice!',
            createdAt: new Date('2024-04-23'),
            likes: 3,
            replies: []
          }
        ],
        isApproved: true
      },
      {
        id: 'c2',
        userId: 'u3',
        userName: 'David Chen',
        userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        content: 'Thanks for sharing this. Very helpful!',
        createdAt: new Date('2024-04-23'),
        likes: 8,
        replies: [],
        isApproved: true
      }
    ],
    commentCount: 6,
    createdAt: new Date('2024-04-21'),
    updatedAt: new Date('2024-04-21'),
    // Card display properties
    date: '21 April 2024',
    readTimeLabel: '5 min read',
    badge: 'Featured',
    isLiked: false,
    isSaved: false,
    likeCount: 45,
    shareCount: 23,
    imageSrc: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=450&fit=crop',
    imageAlt: 'Blog post featured image',
    authorName: 'Sarah Johnson',
    authorAvatarSrc: 'https://images.unsplash.com/photo-1494790108379-be9c2b0e5b41?w=200&h=200&fit=crop&crop=face',
    authorAvatarAlt: 'Sarah Johnson avatar'
  },

  // ─────────────────────────────────────────────
  // Blog Post 2
  // ─────────────────────────────────────────────
  {
    id: 'b2',
    title: 'The Future of Web Development: What to Expect in 2025',
    slug: 'future-of-web-development-2025',
    excerpt: 'Explore the emerging trends and technologies that will shape web development in the coming years.',
    content: `<p>Full blog content here...</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop',
    featuredImageAlt: 'Future of Web Development',
    author: {
      id: 'au2',
      name: 'Michael Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'Michael Rodriguez avatar',
      title: 'Software Architect',
      bio: 'Full-stack developer with 15+ years of experience.',
      socialLinks: {
        twitter: 'https://twitter.com/mikerod',
        linkedin: 'https://linkedin.com/in/michaelr'
      }
    },
    category: {
      id: 'cat1',
      name: 'Development',
      slug: 'development'
    },
    tags: [
      { id: 'tag2', name: 'Web Development', slug: 'web-development' },
      { id: 'tag3', name: 'Trends', slug: 'trends' },
      { id: 'tag4', name: 'Future Tech', slug: 'future-tech' }
    ],
    meta: {
      views: 3456,
      readTime: 8,
      wordCount: 2100,
      isFeatured: false,
      isPublished: true,
      publishedAt: new Date('2024-12-15'),
      seoTitle: 'Future of Web Development 2025',
      seoDescription: 'Emerging trends in web development',
      seoKeywords: ['web development', 'technology', 'future']
    },
    comments: [],
    commentCount: 0,
    createdAt: new Date('2024-12-15'),
    updatedAt: new Date('2024-12-15'),
    date: '15 December 2024',
    readTimeLabel: '8 min read',
    isLiked: false,
    isSaved: false,
    likeCount: 89,
    shareCount: 34,
    imageSrc: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop',
    imageAlt: 'Future of Web Development',
    authorName: 'Michael Rodriguez',
    authorAvatarSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    authorAvatarAlt: 'Michael Rodriguez avatar'
  },

  // ─────────────────────────────────────────────
  // Blog Post 3
  // ─────────────────────────────────────────────
  {
    id: 'b3',
    title: 'Mastering Angular 18: New Features and Best Practices',
    slug: 'mastering-angular-18-features',
    excerpt: 'Dive into the latest Angular 18 features and learn how to implement them in your projects.',
    content: `<p>Full blog content here...</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1581276170525-94f1f9b6a6dd?w=800&h=450&fit=crop',
    featuredImageAlt: 'Angular 18 Features',
    author: {
      id: 'au3',
      name: 'Emily Davis',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'Emily Davis avatar',
      title: 'Frontend Expert',
      bio: 'Angular and React specialist.',
      socialLinks: {
        twitter: 'https://twitter.com/emilyd',
        linkedin: 'https://linkedin.com/in/emilyd'
      }
    },
    category: {
      id: 'cat1',
      name: 'Development',
      slug: 'development'
    },
    tags: [
      { id: 'tag5', name: 'Angular', slug: 'angular' },
      { id: 'tag6', name: 'JavaScript', slug: 'javascript' }
    ],
    meta: {
      views: 4567,
      readTime: 10,
      wordCount: 2800,
      isFeatured: true,
      isPublished: true,
      publishedAt: new Date('2024-11-10'),
      seoTitle: 'Angular 18 Features Guide',
      seoDescription: 'Learn Angular 18 new features',
      seoKeywords: ['Angular', 'JavaScript', 'Frontend']
    },
    comments: [
      {
        id: 'c3',
        userId: 'u4',
        userName: 'James Wilson',
        userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        content: 'Great overview of the new features!',
        createdAt: new Date('2024-11-11'),
        likes: 15,
        replies: [],
        isApproved: true
      }
    ],
    commentCount: 3,
    createdAt: new Date('2024-11-10'),
    updatedAt: new Date('2024-11-10'),
    date: '10 November 2024',
    readTimeLabel: '10 min read',
    badge: 'Popular',
    isLiked: false,
    isSaved: false,
    likeCount: 234,
    shareCount: 89,
    imageSrc: 'https://images.unsplash.com/photo-1581276170525-94f1f9b6a6dd?w=800&h=450&fit=crop',
    imageAlt: 'Angular 18 Features',
    authorName: 'Emily Davis',
    authorAvatarSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    authorAvatarAlt: 'Emily Davis avatar'
  },

  // ─────────────────────────────────────────────
  // Blog Post 4
  // ─────────────────────────────────────────────
  {
    id: 'b4',
    title: 'UI/UX Trends That Will Dominate 2025',
    slug: 'ui-ux-trends-2025',
    excerpt: 'Discover the UI/UX trends that will shape user experience design in the upcoming year.',
    content: `<p>Full blog content here...</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop',
    featuredImageAlt: 'UI/UX Trends 2025',
    author: {
      id: 'au4',
      name: 'Olivia White',
      avatar: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'Olivia White avatar',
      title: 'UX Designer',
      bio: 'Designing beautiful and intuitive interfaces.',
      socialLinks: {
        twitter: 'https://twitter.com/oliviaw',
        linkedin: 'https://linkedin.com/in/oliviaw'
      }
    },
    category: {
      id: 'cat2',
      name: 'Design',
      slug: 'design'
    },
    tags: [
      { id: 'tag7', name: 'UI/UX', slug: 'ui-ux' },
      { id: 'tag8', name: 'Design Trends', slug: 'design-trends' }
    ],
    meta: {
      views: 2345,
      readTime: 6,
      wordCount: 1500,
      isFeatured: false,
      isPublished: true,
      publishedAt: new Date('2024-10-05'),
      seoTitle: 'UI/UX Trends 2025',
      seoDescription: 'Latest UI/UX design trends',
      seoKeywords: ['UI', 'UX', 'Design']
    },
    comments: [],
    commentCount: 0,
    createdAt: new Date('2024-10-05'),
    updatedAt: new Date('2024-10-05'),
    date: '5 October 2024',
    readTimeLabel: '6 min read',
    isLiked: false,
    isSaved: false,
    likeCount: 67,
    shareCount: 12,
    imageSrc: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop',
    imageAlt: 'UI/UX Trends 2025',
    authorName: 'Olivia White',
    authorAvatarSrc: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=200&h=200&fit=crop&crop=face',
    authorAvatarAlt: 'Olivia White avatar'
  },

  // ─────────────────────────────────────────────
  // Blog Post 5
  // ─────────────────────────────────────────────
  {
    id: 'b5',
    title: '5 Essential Tips for Cloud Migration Success',
    slug: 'cloud-migration-essential-tips',
    excerpt: 'Learn the key strategies for successful cloud migration and avoid common pitfalls.',
    content: `<p>Full blog content here...</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=450&fit=crop',
    featuredImageAlt: 'Cloud Migration Tips',
    author: {
      id: 'au5',
      name: 'Daniel Clark',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'Daniel Clark avatar',
      title: 'Cloud Architect',
      bio: 'AWS certified solutions architect.',
      socialLinks: {
        twitter: 'https://twitter.com/danielc',
        linkedin: 'https://linkedin.com/in/danielc'
      }
    },
    category: {
      id: 'cat3',
      name: 'Cloud Computing',
      slug: 'cloud-computing'
    },
    tags: [
      { id: 'tag9', name: 'Cloud', slug: 'cloud' },
      { id: 'tag10', name: 'AWS', slug: 'aws' },
      { id: 'tag11', name: 'DevOps', slug: 'devops' }
    ],
    meta: {
      views: 1876,
      readTime: 7,
      wordCount: 1800,
      isFeatured: false,
      isPublished: true,
      publishedAt: new Date('2024-09-20'),
      seoTitle: 'Cloud Migration Tips',
      seoDescription: 'Essential cloud migration strategies',
      seoKeywords: ['Cloud', 'Migration', 'AWS']
    },
    comments: [
      {
        id: 'c4',
        userId: 'u5',
        userName: 'Priya Sharma',
        userAvatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop',
        content: 'This is exactly what I needed for our migration project!',
        createdAt: new Date('2024-09-21'),
        likes: 23,
        replies: [
          {
            id: 'c4r1',
            userId: 'u6',
            userName: 'Tom Anderson',
            userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
            content: 'Same here! Very helpful.',
            createdAt: new Date('2024-09-22'),
            likes: 5,
            replies: []
          }
        ],
        isApproved: true
      }
    ],
    commentCount: 4,
    createdAt: new Date('2024-09-20'),
    updatedAt: new Date('2024-09-20'),
    date: '20 September 2024',
    readTimeLabel: '7 min read',
    isLiked: false,
    isSaved: false,
    likeCount: 156,
    shareCount: 45,
    imageSrc: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=450&fit=crop',
    imageAlt: 'Cloud Migration Tips',
    authorName: 'Daniel Clark',
    authorAvatarSrc: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face',
    authorAvatarAlt: 'Daniel Clark avatar'
  }
];
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
      <h2 style="font-size:24px;font-weight:700;color:#1E293B;margin:0 0 16px;">Understanding Modern Web Development</h2>
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
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Key Technologies Shaping the Future</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
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
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
      <ul
        style="
          margin:0 0 20px;
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
      <p style="margin:0;color:#475569;font-size:16px;line-height:1.8;">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
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
    content: `
      <h2 style="font-size:24px;font-weight:700;color:#1E293B;margin:0 0 16px;">The Evolution of Web Development</h2>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        As we approach 2025, the web development landscape is undergoing a remarkable transformation.
        New technologies, frameworks, and methodologies are emerging at an unprecedented pace,
        reshaping how we build and interact with web applications.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Artificial Intelligence Integration</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        AI is becoming an integral part of web development. From intelligent chatbots to automated
        testing and code generation, AI tools are helping developers work more efficiently and
        create smarter applications. Machine learning algorithms are being used to personalize
        user experiences and provide real-time insights.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">WebAssembly and Performance</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        WebAssembly continues to gain traction, enabling high-performance applications to run in
        the browser. This technology allows developers to build complex applications that were
        previously only possible in native environments, opening up new possibilities for gaming,
        video editing, and computational science.
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
        "The future of web development is not just about writing code—it's about creating experiences
        that seamlessly blend the physical and digital worlds."
      </blockquote>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Serverless Architecture</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Serverless computing is becoming the norm for modern web applications. Developers can focus
        on writing business logic without worrying about infrastructure management, leading to
        faster development cycles and reduced operational costs.
      </p>
      <ul
        style="
          margin:0 0 20px;
          padding-left:20px;
          color:#334155;
          font-size:16px;
          line-height:1.8;
        ">
        <li style="margin-bottom:10px;">✔ Progressive Web Apps (PWAs) will become mainstream</li>
        <li style="margin-bottom:10px;">✔ Edge computing will reduce latency globally</li>
        <li style="margin-bottom:10px;">✔ Web3 and blockchain will find practical applications</li>
        <li style="margin-bottom:0;">✔ Accessibility will be a core requirement, not an afterthought</li>
      </ul>
      <p style="margin:0;color:#475569;font-size:16px;line-height:1.8;">
        As we look ahead, it's clear that web development in 2025 will be more powerful, more
        accessible, and more intelligent than ever before. The key to success will be staying
        adaptable and embracing continuous learning.
      </p>
    `,
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
    content: `
      <h2 style="font-size:24px;font-weight:700;color:#1E293B;margin:0 0 16px;">Angular 18: A Game-Changer for Frontend Development</h2>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Angular 18 has arrived with a host of exciting features that streamline development and
        enhance performance. This latest version builds upon the solid foundation of its predecessors
        while introducing innovative capabilities that will transform how we build web applications.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Signals: A New Reactive Model</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        One of the most significant additions to Angular 18 is the introduction of Signals. This new
        reactive primitive provides a more intuitive and efficient way to manage state changes
        across your application. Signals offer fine-grained reactivity, making it easier to track
        dependencies and optimize rendering performance.
      </p>
      <pre style="background:#1E293B;color:#E2E8F0;padding:16px;border-radius:8px;margin:16px 0;overflow-x:auto;font-size:14px;line-height:1.6;">
        <code>
        // Signals in Angular 18
        @Component({
          selector: 'app-counter',
          template: \`
            &lt;button (click)="increment()"&gt;Increment&lt;/button&gt;
            &lt;p&gt;Count: {{ count() }}&lt;/p&gt;
          \`
        })
        export class CounterComponent {
          count = signal(0);
          
          increment() {
            this.count.update(value => value + 1);
          }
        }
        </code>
      </pre>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Enhanced Server-Side Rendering (SSR)</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Angular 18 brings significant improvements to server-side rendering with Angular Universal.
        The new hydration features reduce initial load times and improve Core Web Vitals scores,
        delivering a better experience for users on slower connections.
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
        "Signals represent a paradigm shift in Angular's reactivity model, making it more intuitive
        and powerful than ever before."
      </blockquote>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Standalone Components</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Standalone components have become the default approach in Angular 18, simplifying the
        application structure and making it easier to create reusable components without relying
        on NgModules. This leads to cleaner code and faster development.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Performance Optimizations</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        The Angular team has focused heavily on performance in version 18. Improved change detection,
        better tree-shaking, and smaller bundle sizes ensure that applications load faster and run
        more smoothly.
      </p>
      <ul
        style="
          margin:0 0 20px;
          padding-left:20px;
          color:#334155;
          font-size:16px;
          line-height:1.8;
        ">
        <li style="margin-bottom:10px;">✔ Deferred loading for better performance</li>
        <li style="margin-bottom:10px;">✔ Improved Ivy compiler optimizations</li>
        <li style="margin-bottom:10px;">✔ Enhanced TypeScript support</li>
        <li style="margin-bottom:0;">✔ Better developer tooling and debugging</li>
      </ul>
      <p style="margin:0;color:#475569;font-size:16px;line-height:1.8;">
        With Angular 18, developers have access to a powerful toolkit that combines the best of
        modern web development with enterprise-grade reliability. Whether you're building a small
        application or a large-scale enterprise solution, Angular 18 provides the features and
        performance you need.
      </p>
    `,
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
    content: `
      <h2 style="font-size:24px;font-weight:700;color:#1E293B;margin:0 0 16px;">The Future of User Interface Design</h2>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        As we move toward 2025, UI/UX design is evolving rapidly to meet the changing needs and
        expectations of users. Designers are embracing new technologies and philosophies to create
        more immersive, inclusive, and intuitive experiences.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Glassmorphism and Neumorphism</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Glassmorphism is emerging as a dominant design trend, characterized by frosted glass effects
        that create depth and visual interest. Combined with neumorphism's soft, extruded designs,
        these styles are creating new visual languages that feel both modern and familiar.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Voice and Gesture Interfaces</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Voice user interfaces and gesture controls are becoming more sophisticated, offering users
        natural ways to interact with digital products. Designers must now consider multiple input
        methods and create experiences that work seamlessly across all modes of interaction.
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
        "Great design is invisible. The best user experiences are those that users don't even notice
        because they work exactly as expected."
      </blockquote>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Inclusive and Accessible Design</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Accessibility is no longer optional—it's a fundamental requirement. Designers are embracing
        inclusive design principles to ensure that digital products are usable by everyone, regardless
        of their abilities or limitations.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Micro-Interactions and Animations</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Micro-interactions are becoming more sophisticated, providing feedback and delight at every
        touchpoint. Subtle animations and transitions guide users through experiences and create
        emotional connections with products.
      </p>
      <ul
        style="
          margin:0 0 20px;
          padding-left:20px;
          color:#334155;
          font-size:16px;
          line-height:1.8;
        ">
        <li style="margin-bottom:10px;">✔ Dark mode as a default option, not an afterthought</li>
        <li style="margin-bottom:10px;">✔ 3D elements and immersive experiences</li>
        <li style="margin-bottom:10px;">✔ Personalized interfaces using AI</li>
        <li style="margin-bottom:0;">✔ Sustainable design practices</li>
      </ul>
      <p style="margin:0;color:#475569;font-size:16px;line-height:1.8;">
        The future of UI/UX design is exciting and challenging. By embracing these trends and
        principles, designers can create products that not only look beautiful but also deliver
        meaningful value to users.
      </p>
    `,
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
    content: `
      <h2 style="font-size:24px;font-weight:700;color:#1E293B;margin:0 0 16px;">A Strategic Approach to Cloud Migration</h2>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Cloud migration is a complex journey that requires careful planning and execution. With the
        right approach, organizations can unlock the full benefits of cloud computing while minimizing
        risks and disruptions to their operations.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">1. Assess Your Current Infrastructure</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Before moving to the cloud, conduct a thorough assessment of your existing infrastructure.
        Understand your applications, dependencies, and data flows. This assessment will help you
        identify which workloads are suitable for migration and which might need refactoring.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">2. Choose the Right Migration Strategy</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        There's no one-size-fits-all approach to cloud migration. Consider the 6 Rs (Rehost, Replatform,
        Repurchase, Refactor, Retire, Retain) and choose the strategy that best fits each workload.
        A hybrid approach often works best for complex environments.
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
        "Cloud migration is not a one-time project but an ongoing transformation journey."
      </blockquote>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">3. Prioritize Security and Compliance</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Security should be a primary concern throughout the migration process. Implement robust
        identity and access management, encrypt data at rest and in transit, and ensure compliance
        with relevant regulations. Regular security audits and monitoring are essential.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">4. Plan for Cost Optimization</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Cloud costs can quickly spiral out of control if not properly managed. Implement cost
        monitoring and alerting, use reserved instances for predictable workloads, and regularly
        review your resource utilization to identify opportunities for optimization.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">5. Build a Strong Migration Team</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Cloud migration requires a dedicated team with diverse skills. Include cloud architects,
        developers, security experts, and operations personnel. Invest in training and certification
        to ensure your team has the knowledge needed to execute a successful migration.
      </p>
      <ul
        style="
          margin:0 0 20px;
          padding-left:20px;
          color:#334155;
          font-size:16px;
          line-height:1.8;
        ">
        <li style="margin-bottom:10px;">✔ Test, test, and test again before going live</li>
        <li style="margin-bottom:10px;">✔ Have a rollback plan ready</li>
        <li style="margin-bottom:10px;">✔ Monitor performance and adjust accordingly</li>
        <li style="margin-bottom:0;">✔ Document everything for future reference</li>
      </ul>
      <p style="margin:0;color:#475569;font-size:16px;line-height:1.8;">
        With careful planning and execution, cloud migration can transform your organization's
        IT capabilities, enabling greater agility, scalability, and innovation.
      </p>
    `,
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
  },

  // ─────────────────────────────────────────────
  // Blog Post 6
  // ─────────────────────────────────────────────
  {
    id: 'b6',
    title: '10 Must-Have VS Code Extensions for Developers in 2025',
    slug: 'vscode-extensions-2025',
    excerpt: 'Boost your productivity with these essential Visual Studio Code extensions.',
    content: `
      <h2 style="font-size:24px;font-weight:700;color:#1E293B;margin:0 0 16px;">Supercharge Your Development Environment</h2>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Visual Studio Code continues to be the go-to editor for developers worldwide. Its extensibility
        through extensions allows you to tailor your development environment to your specific needs.
        Here are 10 must-have extensions that will boost your productivity in 2025.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">1. GitHub Copilot</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        GitHub Copilot has revolutionized coding with its AI-powered suggestions. This extension
        understands the context of your code and provides intelligent completions, saving time and
        reducing errors. It's like having an expert pair programmer at your fingertips.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">2. ESLint</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        ESLint is essential for maintaining code quality. It identifies and fixes problems in your
        JavaScript and TypeScript code, helping you write cleaner, more maintainable code.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">3. Prettier</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Prettier eliminates code formatting debates. It automatically formats your code, ensuring
        consistency across your team and projects. Focus on writing logic while Prettier handles
        the formatting.
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
        "The right extensions can transform VS Code from a simple text editor into a powerful IDE
        tailored to your workflow."
      </blockquote>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">4. Remote Development</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Remote Development extensions allow you to use containers, remote machines, or WSL as your
        development environment. This eliminates environment inconsistencies and makes collaboration
        smoother.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">5. Live Share</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Live Share enables real-time collaborative development. Share your session with team members,
        edit code together, and debug issues in real-time, regardless of your physical location.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">6. Docker</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        The Docker extension simplifies container management in VS Code. Build, run, and manage
        containers directly from the editor, with IntelliSense for Docker files and integrated
        container logs.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">7. Thunder Client</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Thunder Client is a lightweight alternative to Postman. Test APIs and debug HTTP requests
        without leaving your editor.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">8. GitLens</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        GitLens supercharges Git within VS Code. Visualize code authorship, explore repository
        history, and understand changes more effectively.
      </p>
      <ul
        style="
          margin:0 0 20px;
          padding-left:20px;
          color:#334155;
          font-size:16px;
          line-height:1.8;
        ">
        <li style="margin-bottom:10px;">✔ Path Intellisense for faster imports</li>
        <li style="margin-bottom:10px;">✔ Bracket Pair Colorizer for visual clarity</li>
        <li style="margin-bottom:10px;">✔ Auto Rename Tag for efficient HTML editing</li>
        <li style="margin-bottom:0;">✔ Material Icon Theme for better file visibility</li>
      </ul>
      <p style="margin:0;color:#475569;font-size:16px;line-height:1.8;">
        These extensions represent just a fraction of what's available. Experiment with different
        extensions to find the combination that works best for your workflow and preferences.
      </p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=450&fit=crop',
    featuredImageAlt: 'VS Code Extensions',
    author: {
      id: 'au6',
      name: 'Rachel Green',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'Rachel Green avatar',
      title: 'Senior Developer',
      bio: 'JavaScript and Python enthusiast.',
      socialLinks: {
        twitter: 'https://twitter.com/rachelg',
        linkedin: 'https://linkedin.com/in/rachelg'
      }
    },
    category: {
      id: 'cat1',
      name: 'Development',
      slug: 'development'
    },
    tags: [
      { id: 'tag12', name: 'VS Code', slug: 'vscode' },
      { id: 'tag13', name: 'Productivity', slug: 'productivity' }
    ],
    meta: {
      views: 2891,
      readTime: 5,
      wordCount: 1200,
      isFeatured: false,
      isPublished: true,
      publishedAt: new Date('2024-08-15'),
      seoTitle: 'VS Code Extensions 2025',
      seoDescription: 'Best VS Code extensions for developers',
      seoKeywords: ['VS Code', 'Extensions', 'Productivity']
    },
    comments: [],
    commentCount: 0,
    createdAt: new Date('2024-08-15'),
    updatedAt: new Date('2024-08-15'),
    date: '15 August 2024',
    readTimeLabel: '5 min read',
    isLiked: false,
    isSaved: false,
    likeCount: 312,
    shareCount: 78,
    imageSrc: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=450&fit=crop',
    imageAlt: 'VS Code Extensions',
    authorName: 'Rachel Green',
    authorAvatarSrc: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face',
    authorAvatarAlt: 'Rachel Green avatar'
  },

  // ─────────────────────────────────────────────
  // Blog Post 7
  // ─────────────────────────────────────────────
  {
    id: 'b7',
    title: 'Getting Started with AI and Machine Learning in 2025',
    slug: 'ai-machine-learning-guide',
    excerpt: 'A comprehensive guide for beginners to start their journey in AI and machine learning.',
    content: `
      <h2 style="font-size:24px;font-weight:700;color:#1E293B;margin:0 0 16px;">Your AI Journey Begins Here</h2>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Artificial Intelligence and Machine Learning are transforming every industry. Whether you're
        a developer, data scientist, or business leader, understanding AI/ML is becoming essential.
        This guide will help you start your AI journey with confidence.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Understanding the Fundamentals</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        AI is a broad field that includes machine learning, deep learning, and natural language
        processing. Machine learning is a subset of AI that enables systems to learn from data
        without explicit programming. Start by understanding the difference between supervised,
        unsupervised, and reinforcement learning.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Essential Tools and Frameworks</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Python is the primary language for AI/ML development. Important libraries include:
      </p>
      <ul
        style="
          margin:0 0 20px;
          padding-left:20px;
          color:#334155;
          font-size:16px;
          line-height:1.8;
        ">
        <li style="margin-bottom:10px;">🔹 <strong>TensorFlow</strong> - Google's open-source ML framework</li>
        <li style="margin-bottom:10px;">🔹 <strong>PyTorch</strong> - Facebook's dynamic computation framework</li>
        <li style="margin-bottom:10px;">🔹 <strong>Scikit-learn</strong> - Simple and efficient ML tools</li>
        <li style="margin-bottom:0;">🔹 <strong>Pandas</strong> - Data manipulation and analysis</li>
      </ul>
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
        "AI is not about replacing human intelligence but augmenting it. The goal is to create
        tools that help us make better decisions."
      </blockquote>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">First Steps in Machine Learning</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Start with a simple project. Predict housing prices using linear regression, classify
        iris flowers using scikit-learn, or build a basic neural network using TensorFlow. These
        projects will help you understand the end-to-end ML workflow.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Resources for Learning</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        There are numerous resources available to learn AI/ML. Online courses like Andrew Ng's
        Machine Learning specialization, hands-on tutorials on Kaggle, and documentation for
        popular frameworks are excellent starting points.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Building Your Portfolio</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        As you learn, build projects to showcase your skills. Contribute to open-source projects,
        participate in Kaggle competitions, and document your work on GitHub. A strong portfolio
        is key to advancing in the AI/ML field.
      </p>
      <p style="margin:0;color:#475569;font-size:16px;line-height:1.8;">
        Remember, learning AI/ML is a journey, not a destination. Stay curious, keep experimenting,
        and don't be afraid to make mistakes. Every error is an opportunity to learn.
      </p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop',
    featuredImageAlt: 'AI and Machine Learning',
    author: {
      id: 'au7',
      name: 'Amit Patel',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'Amit Patel avatar',
      title: 'AI Researcher',
      bio: 'PhD in Computer Science, specializing in NLP.',
      socialLinks: {
        twitter: 'https://twitter.com/amitp',
        linkedin: 'https://linkedin.com/in/amitp'
      }
    },
    category: {
      id: 'cat4',
      name: 'Artificial Intelligence',
      slug: 'ai'
    },
    tags: [
      { id: 'tag14', name: 'AI', slug: 'ai' },
      { id: 'tag15', name: 'Machine Learning', slug: 'machine-learning' },
      { id: 'tag16', name: 'Deep Learning', slug: 'deep-learning' }
    ],
    meta: {
      views: 5234,
      readTime: 12,
      wordCount: 3200,
      isFeatured: true,
      isPublished: true,
      publishedAt: new Date('2024-07-25'),
      seoTitle: 'AI and ML Guide 2025',
      seoDescription: 'Complete guide to AI and ML for beginners',
      seoKeywords: ['AI', 'Machine Learning', 'Deep Learning']
    },
    comments: [
      {
        id: 'c5',
        userId: 'u7',
        userName: 'Sophia Lee',
        userAvatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop',
        content: 'This is exactly what I needed as a beginner!',
        createdAt: new Date('2024-07-26'),
        likes: 34,
        replies: [
          {
            id: 'c5r1',
            userId: 'u8',
            userName: 'Mark Johnson',
            userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
            content: 'Same here! Very comprehensive guide.',
            createdAt: new Date('2024-07-27'),
            likes: 8,
            replies: []
          }
        ],
        isApproved: true
      }
    ],
    commentCount: 8,
    createdAt: new Date('2024-07-25'),
    updatedAt: new Date('2024-07-25'),
    date: '25 July 2024',
    readTimeLabel: '12 min read',
    badge: 'Trending',
    isLiked: false,
    isSaved: false,
    likeCount: 567,
    shareCount: 123,
    imageSrc: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop',
    imageAlt: 'AI and Machine Learning',
    authorName: 'Amit Patel',
    authorAvatarSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    authorAvatarAlt: 'Amit Patel avatar'
  },

  // ─────────────────────────────────────────────
  // Blog Post 8
  // ─────────────────────────────────────────────
  {
    id: 'b8',
    title: 'Mastering CSS Grid and Flexbox: A Complete Guide',
    slug: 'css-grid-flexbox-guide',
    excerpt: 'Learn how to build modern, responsive layouts with CSS Grid and Flexbox.',
    content: `
      <h2 style="font-size:24px;font-weight:700;color:#1E293B;margin:0 0 16px;">Modern CSS Layouts Made Simple</h2>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        CSS Grid and Flexbox have revolutionized web layout design. These powerful tools allow
        developers to create complex, responsive layouts with minimal code. Understanding both
        systems is essential for modern web development.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Flexbox: One-Dimensional Layout</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Flexbox is designed for one-dimensional layouts—either a row or a column. It excels at
        distributing space along a single axis and aligning items in complex ways. Flexbox is
        particularly useful for navigation bars, card layouts, and vertical centering.
      </p>
      <pre style="background:#1E293B;color:#E2E8F0;padding:16px;border-radius:8px;margin:16px 0;overflow-x:auto;font-size:14px;line-height:1.6;">
        <code>
        .flex-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .flex-item {
          flex: 1 1 200px;
          padding: 20px;
          background: #f0f0f0;
        }
        </code>
      </pre>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">CSS Grid: Two-Dimensional Layout</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        CSS Grid is designed for two-dimensional layouts, handling both rows and columns
        simultaneously. It's perfect for creating complex page layouts, dashboard designs, and
        grid-based content displays.
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
        "CSS Grid gives you the power to create any layout you can imagine, without the need for
        complex hacks or additional HTML structure."
      </blockquote>
      <pre style="background:#1E293B;color:#E2E8F0;padding:16px;border-radius:8px;margin:16px 0;overflow-x:auto;font-size:14px;line-height:1.6;">
        <code>
        .grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto 1fr auto;
          gap: 20px;
          min-height: 100vh;
        }
        
        .grid-item {
          padding: 20px;
          background: #f0f0f0;
        }
        </code>
      </pre>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">When to Use Flexbox vs. Grid</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        The choice between Flexbox and Grid depends on your layout needs:
      </p>
      <ul
        style="
          margin:0 0 20px;
          padding-left:20px;
          color:#334155;
          font-size:16px;
          line-height:1.8;
        ">
        <li style="margin-bottom:10px;">➡️ Use <strong>Flexbox</strong> for one-dimensional layouts (navigation, components)</li>
        <li style="margin-bottom:10px;">➡️ Use <strong>Grid</strong> for two-dimensional layouts (page structure, dashboards)</li>
        <li style="margin-bottom:10px;">➡️ Use <strong>Flexbox</strong> for content-driven layouts that need to wrap</li>
        <li style="margin-bottom:0;">➡️ Use <strong>Grid</strong> for layout-driven designs with precise positioning</li>
      </ul>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Combining Flexbox and Grid</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        These two layout systems work beautifully together. Use Grid for the overall page structure
        and Flexbox for components within grid items. This combination gives you the best of both
        worlds—precise control and flexible components.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Responsive Design Considerations</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Both Flexbox and Grid support responsive design. Use media queries to adjust grid-template-columns,
        flex-direction, or gap values based on screen size. Modern CSS also offers container queries
        for component-level responsiveness.
      </p>
      <p style="margin:0;color:#475569;font-size:16px;line-height:1.8;">
        With practice, CSS Grid and Flexbox will become second nature. Start by building simple
        layouts and gradually tackle more complex designs. The key is understanding the strengths
        of each system and using them appropriately.
      </p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=450&fit=crop',
    featuredImageAlt: 'CSS Grid and Flexbox',
    author: {
      id: 'au8',
      name: 'Jessica Wang',
      avatar: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'Jessica Wang avatar',
      title: 'Frontend Developer',
      bio: 'Creating pixel-perfect interfaces.',
      socialLinks: {
        twitter: 'https://twitter.com/jessicaw',
        linkedin: 'https://linkedin.com/in/jessicaw'
      }
    },
    category: {
      id: 'cat1',
      name: 'Development',
      slug: 'development'
    },
    tags: [
      { id: 'tag17', name: 'CSS', slug: 'css' },
      { id: 'tag18', name: 'Flexbox', slug: 'flexbox' },
      { id: 'tag19', name: 'Grid', slug: 'grid' }
    ],
    meta: {
      views: 3451,
      readTime: 9,
      wordCount: 2400,
      isFeatured: false,
      isPublished: true,
      publishedAt: new Date('2024-06-30'),
      seoTitle: 'CSS Grid and Flexbox Guide',
      seoDescription: 'Master CSS layouts with Grid and Flexbox',
      seoKeywords: ['CSS', 'Flexbox', 'Grid', 'Layout']
    },
    comments: [
      {
        id: 'c6',
        userId: 'u9',
        userName: 'Chris Evans',
        userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        content: 'Finally, a guide that makes sense!',
        createdAt: new Date('2024-07-01'),
        likes: 19,
        replies: [],
        isApproved: true
      }
    ],
    commentCount: 2,
    createdAt: new Date('2024-06-30'),
    updatedAt: new Date('2024-06-30'),
    date: '30 June 2024',
    readTimeLabel: '9 min read',
    isLiked: false,
    isSaved: false,
    likeCount: 178,
    shareCount: 56,
    imageSrc: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=450&fit=crop',
    imageAlt: 'CSS Grid and Flexbox',
    authorName: 'Jessica Wang',
    authorAvatarSrc: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=200&h=200&fit=crop&crop=face',
    authorAvatarAlt: 'Jessica Wang avatar'
  },

  // ─────────────────────────────────────────────
  // Blog Post 9
  // ─────────────────────────────────────────────
  {
    id: 'b9',
    title: 'Building Scalable Microservices with Node.js',
    slug: 'scalable-microservices-nodejs',
    excerpt: 'Learn how to design and implement scalable microservices using Node.js.',
    content: `
      <h2 style="font-size:24px;font-weight:700;color:#1E293B;margin:0 0 16px;">Microservices Architecture with Node.js</h2>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Node.js has become a popular choice for building microservices due to its non-blocking,
        event-driven architecture. This guide explores how to design and implement scalable
        microservices using Node.js, leveraging its strengths and following best practices.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Understanding Microservices</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Microservices architecture breaks down applications into small, independent services that
        communicate over a network. Each service focuses on a specific business capability,
        making the system more modular, scalable, and easier to maintain.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Designing Your Microservices</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Start by identifying your bounded contexts and domain boundaries. Each microservice should
        have a single responsibility and be independently deployable. Consider using Domain-Driven
        Design (DDD) to guide your service boundaries.
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
        "Microservices give you the freedom to use the right tool for the job, scale services
        independently, and deploy with confidence."
      </blockquote>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Communication Patterns</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Choose appropriate communication patterns between services. REST APIs are common, but also
        consider message queues, event streaming, and GraphQL. Each has its strengths depending on
        your use case.
      </p>
      <pre style="background:#1E293B;color:#E2E8F0;padding:16px;border-radius:8px;margin:16px 0;overflow-x:auto;font-size:14px;line-height:1.6;">
        <code>
        // Express.js microservice example
        const express = require('express');
        const app = express();
        const PORT = process.env.PORT || 3000;
        
        app.use(express.json());
        
        app.get('/api/users/:id', (req, res) => {
          // Service logic here
          res.json({ id: req.params.id, name: 'John Doe' });
        });
        
        app.listen(PORT, () => {
          console.log(\`User service running on port \${PORT}\`);
        });
        </code>
      </pre>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Data Management</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Each microservice should have its own database. This ensures loose coupling and service
        independence. Use patterns like CQRS and event sourcing for complex data scenarios.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Deployment and Scaling</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Containerization using Docker and orchestration with Kubernetes are standard practices.
        Use service discovery, load balancing, and health checks to ensure reliability. Implement
        proper logging and monitoring with tools like ELK stack or Prometheus.
      </p>
      <ul
        style="
          margin:0 0 20px;
          padding-left:20px;
          color:#334155;
          font-size:16px;
          line-height:1.8;
        ">
        <li style="margin-bottom:10px;">✔ Use API gateways for routing and authentication</li>
        <li style="margin-bottom:10px;">✔ Implement circuit breakers for fault tolerance</li>
        <li style="margin-bottom:10px;">✔ Use distributed tracing for debugging</li>
        <li style="margin-bottom:0;">✔ Design for failure with retry logic and fallbacks</li>
      </ul>
      <p style="margin:0;color:#475569;font-size:16px;line-height:1.8;">
        Building microservices with Node.js requires careful consideration of architecture,
        communication, and operational concerns. With the right approach, you can build systems
        that are scalable, resilient, and easy to maintain.
      </p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=450&fit=crop',
    featuredImageAlt: 'Microservices with Node.js',
    author: {
      id: 'au9',
      name: 'Kevin Martinez',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'Kevin Martinez avatar',
      title: 'Backend Engineer',
      bio: 'Building robust backend systems.',
      socialLinks: {
        twitter: 'https://twitter.com/kevinm',
        linkedin: 'https://linkedin.com/in/kevinm'
      }
    },
    category: {
      id: 'cat3',
      name: 'Backend Development',
      slug: 'backend'
    },
    tags: [
      { id: 'tag20', name: 'Node.js', slug: 'nodejs' },
      { id: 'tag21', name: 'Microservices', slug: 'microservices' },
      { id: 'tag22', name: 'API', slug: 'api' }
    ],
    meta: {
      views: 2134,
      readTime: 11,
      wordCount: 2900,
      isFeatured: false,
      isPublished: true,
      publishedAt: new Date('2024-06-10'),
      seoTitle: 'Microservices with Node.js',
      seoDescription: 'Build scalable microservices with Node.js',
      seoKeywords: ['Node.js', 'Microservices', 'Backend']
    },
    comments: [],
    commentCount: 0,
    createdAt: new Date('2024-06-10'),
    updatedAt: new Date('2024-06-10'),
    date: '10 June 2024',
    readTimeLabel: '11 min read',
    isLiked: false,
    isSaved: false,
    likeCount: 145,
    shareCount: 32,
    imageSrc: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=450&fit=crop',
    imageAlt: 'Microservices with Node.js',
    authorName: 'Kevin Martinez',
    authorAvatarSrc: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face',
    authorAvatarAlt: 'Kevin Martinez avatar'
  },

  // ─────────────────────────────────────────────
  // Blog Post 10
  // ─────────────────────────────────────────────
  {
    id: 'b10',
    title: 'Data Visualization Best Practices: Creating Impactful Dashboards',
    slug: 'data-visualization-best-practices',
    excerpt: 'Learn the principles and best practices for creating effective data visualizations and dashboards.',
    content: `
      <h2 style="font-size:24px;font-weight:700;color:#1E293B;margin:0 0 16px;">The Art and Science of Data Visualization</h2>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Data visualization is more than just creating charts—it's about telling stories with data.
        Effective visualizations help users understand complex information quickly and make
        informed decisions. This guide covers best practices for creating impactful dashboards.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Know Your Audience</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Understanding your audience is crucial. What decisions will they make? What context do they
        need? Design your dashboard to answer specific questions and provide actionable insights.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Choose the Right Chart Types</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Selecting the appropriate chart type is essential for effective communication. Bar charts
        for comparisons, line charts for trends over time, pie charts for parts of a whole, and
        scatter plots for relationships. Use the chart that best represents your data and message.
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
        "The goal of data visualization is not to show data, but to reveal insights. Every
        element of your visualization should serve that purpose."
      </blockquote>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Design Principles</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Apply design principles to your visualizations. Use color strategically to highlight
        important information, maintain consistency in your design language, and ensure there's
        adequate whitespace for readability. Remember that less is often more.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Interactive Elements</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Adding interactivity can enhance data exploration. Filters allow users to focus on specific
        data segments, tooltips provide additional context, and drill-down capabilities enable
        deeper analysis.
      </p>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Performance and Accessibility</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Ensure your dashboards load quickly and handle large datasets efficiently. Consider
        accessibility—use sufficient contrast, provide text alternatives, and ensure keyboard
        navigation works.
      </p>
      <ul
        style="
          margin:0 0 20px;
          padding-left:20px;
          color:#334155;
          font-size:16px;
          line-height:1.8;
        ">
        <li style="margin-bottom:10px;">📊 Use consistent colors and typography</li>
        <li style="margin-bottom:10px;">📊 Provide context with titles and labels</li>
        <li style="margin-bottom:10px;">📊 Test on different screen sizes and devices</li>
        <li style="margin-bottom:0;">📊 Iterate based on user feedback</li>
      </ul>
      <h3 style="font-size:20px;font-weight:600;color:#1E293B;margin:24px 0 12px;">Tools and Technologies</h3>
      <p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
        Explore various visualization tools and libraries. D3.js offers maximum flexibility,
        while Chart.js provides simplicity. For dashboards, consider Tableau, PowerBI, or open-source
        alternatives like Metabase or Superset.
      </p>
      <p style="margin:0;color:#475569;font-size:16px;line-height:1.8;">
        Creating impactful dashboards requires a blend of technical skills and design thinking.
        Continuously refine your visualizations based on user feedback and changing requirements.
      </p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    featuredImageAlt: 'Data Visualization',
    author: {
      id: 'au10',
      name: 'Maria Garcia',
      avatar: 'https://images.unsplash.com/photo-1494790108379-be9c2b0e5b41?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'Maria Garcia avatar',
      title: 'Data Analyst',
      bio: 'Turning data into actionable insights.',
      socialLinks: {
        twitter: 'https://twitter.com/mariag',
        linkedin: 'https://linkedin.com/in/mariag'
      }
    },
    category: {
      id: 'cat5',
      name: 'Data Science',
      slug: 'data-science'
    },
    tags: [
      { id: 'tag23', name: 'Data Visualization', slug: 'data-viz' },
      { id: 'tag24', name: 'Analytics', slug: 'analytics' },
      { id: 'tag25', name: 'Dashboards', slug: 'dashboards' }
    ],
    meta: {
      views: 1678,
      readTime: 6,
      wordCount: 1600,
      isFeatured: false,
      isPublished: true,
      publishedAt: new Date('2024-05-20'),
      seoTitle: 'Data Visualization Best Practices',
      seoDescription: 'Create impactful data visualizations',
      seoKeywords: ['Data Visualization', 'Analytics', 'Dashboards']
    },
    comments: [
      {
        id: 'c7',
        userId: 'u10',
        userName: 'Alex Turner',
        userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        content: 'Great tips! I\'ll apply these to my next dashboard.',
        createdAt: new Date('2024-05-21'),
        likes: 14,
        replies: [],
        isApproved: true
      }
    ],
    commentCount: 1,
    createdAt: new Date('2024-05-20'),
    updatedAt: new Date('2024-05-20'),
    date: '20 May 2024',
    readTimeLabel: '6 min read',
    isLiked: false,
    isSaved: false,
    likeCount: 92,
    shareCount: 28,
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    imageAlt: 'Data Visualization',
    authorName: 'Maria Garcia',
    authorAvatarSrc: 'https://images.unsplash.com/photo-1494790108379-be9c2b0e5b41?w=200&h=200&fit=crop&crop=face',
    authorAvatarAlt: 'Maria Garcia avatar'
  }
];
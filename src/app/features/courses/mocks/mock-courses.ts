import { ICourse } from '../interfaces';
import { CourseCategory, CourseLevel } from '../enums';

export const MOCK_COURSES: ICourse[] = [
  // ─────────────────────────────────────────────
  // Featured Course 1
  // ─────────────────────────────────────────────
  {
    id: '1',
    title: 'Angular Mastery: From Zero to Hero',
    description: `<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  Learn
  <strong style="color:#1E293B;">Angular 21</strong>
  from scratch and build
  <span style="color:#7768E5;font-weight:600;">
    real-world applications
  </span>.
</p>

<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  This course covers
  <span style="background:#EEF2FF;padding:2px 8px;border-radius:4px;font-weight:600;color:#4338CA;">
    Components
  </span>,
  Routing, Signals, RxJS, Forms, and State Management.
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
  Build production-ready Angular applications with modern best practices.
</blockquote>

<ul
  style="
    margin:0;
    padding-left:20px;
    color:#334155;
    font-size:16px;
    line-height:1.8;
  ">
  <li style="margin-bottom:10px;">
    ✔ Standalone Components
  </li>

  <li style="margin-bottom:10px;">
    ✔ Angular Signals
  </li>

  <li style="margin-bottom:10px;">
    ✔ Lazy Loading
  </li>

  <li style="margin-bottom:10px;">
    ✔ HTTP &amp; REST APIs
  </li>

  <li style="margin-bottom:0;">
    ✔ Performance Optimization
  </li>
</ul>`,
    shortDescription:
      'Complete Angular course covering everything from fundamentals to advanced concepts including RxJS, NgRx, and performance optimization.',
    slug: 'angular-mastery-from-zero-to-hero',
    thumbnail: 'https://images.unsplash.com/photo-1581276170525-94f1f9b6a6dd?w=800&h=450&fit=crop',
    category: CourseCategory.Development,
    level: CourseLevel.INTERMEDIATE,
    duration: 25.5,
    instructor: {
      id: 'i1',
      name: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
      title: 'Senior Angular Engineer',
      bio: '10+ years building enterprise Angular applications.',
    },
    rating: 4.8,
    ratingLabel: '4.8 (Excellent)',
    totalStudents: 12500,
    totalReviews: 1247,
    price: 99.99,
    oldPrice: 149.99,
    isFree: false,
    createdAt: new Date('2024-01-15'),
    totalLessons: 48,
    isInCart: false,
    // Featured card properties
    badge: 'Bestseller',
    imageSrc: 'https://images.unsplash.com/photo-1581276170525-94f1f9b6a6dd?w=800&h=450&fit=crop',
    imageAlt: 'Angular Mastery course thumbnail',
    author: {
      name: 'John Doe',
      avatarSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'John Doe avatar',
      category: 'Web Development',
    },
    meta: {
      duration: '25.5 Hours',
      lessonCount: 48,
      studentCount: 12500,
      level: CourseLevel.INTERMEDIATE,
    },
    priceObject: {
      current: 99.99,
      old: 149.99,
      currency: '$',
    },
    seoTitle: 'Angular Mastery - Complete Angular Course',
    seoDescription: 'Learn Angular from scratch to advanced concepts',
    keywords: ['Angular', 'JavaScript', 'Frontend', 'RxJS'],
    reviews: [
      {
        id: 'r1',
        userId: 'u1',
        userName: 'Alice Johnson',
        userAvatar:
          'https://images.unsplash.com/photo-1494790108379-be9c2b0e5b41?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          'This course completely changed my understanding of Angular. The explanations are crystal clear and the projects are very practical. Highly recommend!',
        createdAt: new Date('2024-02-15'),
        updatedAt: new Date('2024-02-15'),
        helpful: 234,
      },
      {
        id: 'r2',
        userId: 'u2',
        userName: 'Mark Thompson',
        userAvatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          'John is an amazing instructor. The way he breaks down complex topics like RxJS and Signals is brilliant. I went from zero to building production-ready apps.',
        createdAt: new Date('2024-03-01'),
        updatedAt: new Date('2024-03-01'),
        helpful: 189,
      },
      {
        id: 'r3',
        userId: 'u3',
        userName: 'Sarah Chen',
        userAvatar:
          'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop',
        rating: 4,
        comment:
          'Great course content, but I wish there was more focus on testing. Otherwise, everything else is top-notch.',
        createdAt: new Date('2024-03-10'),
        updatedAt: new Date('2024-03-10'),
        helpful: 56,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Featured Course 2
  // ─────────────────────────────────────────────
  {
    id: '2',
    title: 'React Complete Guide 2024',
    description: `<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  Master
  <strong style="color:#1E293B;">React 18</strong>
  and build modern web applications with
  <span style="color:#61DAFB;font-weight:600;">
    Hooks, Context API, and React Router
  </span>.
</p>

<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  This comprehensive course covers everything from React fundamentals to advanced patterns.
</p>

<blockquote
  style="
    margin:20px 0;
    padding:16px 20px;
    border-left:4px solid #61DAFB;
    background:#F8FAFC;
    color:#475569;
    font-size:15px;
    line-height:1.8;
    font-style:italic;
    border-radius:8px;
  ">
  Build real-world applications with React and modern hooks.
</blockquote>

<ul
  style="
    margin:0;
    padding-left:20px;
    color:#334155;
    font-size:16px;
    line-height:1.8;
  ">
  <li style="margin-bottom:10px;">
    ✔ React Hooks (useState, useEffect, useContext)
  </li>

  <li style="margin-bottom:10px;">
    ✔ State Management with Context API
  </li>

  <li style="margin-bottom:10px;">
    ✔ React Router v6
  </li>

  <li style="margin-bottom:10px;">
    ✔ Custom Hooks
  </li>

  <li style="margin-bottom:0;">
    ✔ Performance Optimization
  </li>
</ul>`,
    shortDescription:
      'Learn React, Hooks, Context API, and modern frontend architecture with real-world projects.',
    slug: 'react-complete-guide',
    thumbnail: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=450&fit=crop',
    category: CourseCategory.Development,
    level: CourseLevel.BEGINNER,
    duration: 22,
    instructor: {
      id: 'i2',
      name: 'Sarah Wilson',
      avatar:
        'https://images.unsplash.com/photo-1494790108379-be9c2b0e5b41?w=200&h=200&fit=crop&crop=face',
      title: 'Frontend Architect',
      bio: 'React expert and JavaScript mentor.',
    },
    rating: 4.7,
    ratingLabel: '4.7 (Highly Rated)',
    totalStudents: 9800,
    totalReviews: 876,
    price: 89.99,
    oldPrice: 129.99,
    isFree: false,
    createdAt: new Date('2024-02-10'),
    totalLessons: 42,
    isInCart: false,
    badge: 'Hot & New',
    imageSrc: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=450&fit=crop',
    imageAlt: 'React Complete Guide course thumbnail',
    author: {
      name: 'Sarah Wilson',
      avatarSrc:
        'https://images.unsplash.com/photo-1494790108379-be9c2b0e5b41?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'Sarah Wilson avatar',
      category: 'Web Development',
    },
    meta: {
      duration: '22 Hours',
      lessonCount: 42,
      studentCount: 9800,
      level: CourseLevel.BEGINNER,
    },
    priceObject: {
      current: 89.99,
      old: 129.99,
      currency: '$',
    },
    seoTitle: 'React Complete Guide - Modern React Course',
    seoDescription: 'Master React with hooks and context API',
    keywords: ['React', 'Hooks', 'Context API', 'JavaScript'],
    reviews: [
      {
        id: 'r4',
        userId: 'u4',
        userName: 'Michael Rodriguez',
        userAvatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          'Sarah has a gift for teaching! After struggling with React for months, this course made everything click. The projects are practical and well-structured.',
        createdAt: new Date('2024-03-15'),
        updatedAt: new Date('2024-03-15'),
        helpful: 312,
      },
      {
        id: 'r5',
        userId: 'u5',
        userName: 'Emma Davis',
        userAvatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        rating: 4,
        comment:
          "Excellent beginner course. The explanations are thorough and the examples are practical. I would have liked more content on TypeScript, but that's a minor issue.",
        createdAt: new Date('2024-03-22'),
        updatedAt: new Date('2024-03-22'),
        helpful: 78,
      },
      {
        id: 'r6',
        userId: 'u6',
        userName: 'James Park',
        userAvatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          "Finally a React course that doesn't just scratch the surface. Sarah covers advanced patterns and best practices that I actually use in my daily work.",
        createdAt: new Date('2024-04-01'),
        updatedAt: new Date('2024-04-01'),
        helpful: 145,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Featured Course 3
  // ─────────────────────────────────────────────
  {
    id: '3',
    title: 'Node.js API Development Masterclass',
    description: `<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  Build production-ready
  <strong style="color:#1E293B;">REST APIs</strong>
  with
  <span style="color:#68A063;font-weight:600;">
    Node.js, Express, and MongoDB
  </span>.
</p>

<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  This masterclass covers everything from setting up your first server to deploying a scalable API.
</p>

<blockquote
  style="
    margin:20px 0;
    padding:16px 20px;
    border-left:4px solid #68A063;
    background:#F8FAFC;
    color:#475569;
    font-size:15px;
    line-height:1.8;
    font-style:italic;
    border-radius:8px;
  ">
  Build secure, scalable, and testable APIs with Node.js.
</blockquote>

<ul
  style="
    margin:0;
    padding-left:20px;
    color:#334155;
    font-size:16px;
    line-height:1.8;
  ">
  <li style="margin-bottom:10px;">
    ✔ RESTful API Design
  </li>

  <li style="margin-bottom:10px;">
    ✔ Authentication & Authorization (JWT)
  </li>

  <li style="margin-bottom:10px;">
    ✔ Database Integration (MongoDB/Mongoose)
  </li>

  <li style="margin-bottom:10px;">
    ✔ Error Handling & Validation
  </li>

  <li style="margin-bottom:0;">
    ✔ Unit & Integration Testing
  </li>
</ul>`,
    shortDescription:
      'Build scalable REST APIs with Node.js, Express, and MongoDB with authentication and testing.',
    slug: 'nodejs-api-development',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=450&fit=crop',
    category: CourseCategory.Development,
    level: CourseLevel.INTERMEDIATE,
    duration: 18,
    instructor: {
      id: 'i3',
      name: 'Michael Brown',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      title: 'Backend Engineer',
      bio: 'Specialized in scalable backend systems.',
    },
    rating: 4.6,
    ratingLabel: '4.6 (Very Good)',
    totalStudents: 7600,
    totalReviews: 654,
    price: 79.99,
    oldPrice: 109.99,
    isFree: false,
    createdAt: new Date('2024-03-05'),
    totalLessons: 36,
    isInCart: false,
    badge: 'Top Rated',
    imageSrc: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=450&fit=crop',
    imageAlt: 'Node.js API Development course thumbnail',
    author: {
      name: 'Michael Brown',
      avatarSrc:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'Michael Brown avatar',
      category: 'Backend Development',
    },
    meta: {
      duration: '18 Hours',
      lessonCount: 36,
      studentCount: 7600,
      level: CourseLevel.INTERMEDIATE,
    },
    priceObject: {
      current: 79.99,
      old: 109.99,
      currency: '$',
    },
    seoTitle: 'Node.js API Development - Complete Course',
    seoDescription: 'Build scalable REST APIs with Node.js',
    keywords: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    reviews: [
      {
        id: 'r7',
        userId: 'u7',
        userName: 'Thomas Wilson',
        userAvatar:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          "I've been building APIs for years but this course taught me so many best practices. The JWT authentication and error handling sections are worth the price alone.",
        createdAt: new Date('2024-04-10'),
        updatedAt: new Date('2024-04-10'),
        helpful: 198,
      },
      {
        id: 'r8',
        userId: 'u8',
        userName: 'Jessica Martinez',
        userAvatar:
          'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop',
        rating: 4,
        comment:
          'Really solid course. Michael is an excellent teacher. The only thing I felt was missing was more content on microservices architecture.',
        createdAt: new Date('2024-04-20'),
        updatedAt: new Date('2024-04-20'),
        helpful: 67,
      },
      {
        id: 'r9',
        userId: 'u9',
        userName: 'David Chen',
        userAvatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          'Perfect for anyone transitioning from frontend to full-stack. The course is well-paced and all concepts are clearly explained.',
        createdAt: new Date('2024-05-01'),
        updatedAt: new Date('2024-05-01'),
        helpful: 123,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Default Course 4
  // ─────────────────────────────────────────────
  {
    id: '4',
    title: 'UI/UX Design Fundamentals',
    description: `<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  Master
  <strong style="color:#1E293B;">User Experience Design</strong>
  and create beautiful, intuitive interfaces with
  <span style="color:#F24E1E;font-weight:600;">
    Figma
  </span>.
</p>

<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  This course teaches you the fundamentals of UI/UX design through hands-on projects.
</p>

<blockquote
  style="
    margin:20px 0;
    padding:16px 20px;
    border-left:4px solid #F24E1E;
    background:#F8FAFC;
    color:#475569;
    font-size:15px;
    line-height:1.8;
    font-style:italic;
    border-radius:8px;
  ">
  Learn design principles that actually convert users.
</blockquote>

<ul
  style="
    margin:0;
    padding-left:20px;
    color:#334155;
    font-size:16px;
    line-height:1.8;
  ">
  <li style="margin-bottom:10px;">
    ✔ Design Thinking Process
  </li>

  <li style="margin-bottom:10px;">
    ✔ User Research & Personas
  </li>

  <li style="margin-bottom:10px;">
    ✔ Wireframing & Prototyping
  </li>

  <li style="margin-bottom:10px;">
    ✔ Visual Design Principles
  </li>

  <li style="margin-bottom:0;">
    ✔ Usability Testing
  </li>
</ul>`,
    shortDescription:
      'Master user experience principles and modern UI design with Figma and user research.',
    slug: 'ui-ux-design-fundamentals',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop',
    category: CourseCategory.Design,
    level: CourseLevel.BEGINNER,
    duration: 15,
    instructor: {
      id: 'i4',
      name: 'Emily Davis',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      title: 'Senior UI/UX Designer',
      bio: 'Design consultant with 8 years of experience.',
    },
    rating: 4.9,
    ratingLabel: '4.9 (Outstanding)',
    totalStudents: 5400,
    totalReviews: 432,
    price: 69.99,
    oldPrice: 99.99,
    isFree: false,
    createdAt: new Date('2024-01-22'),
    totalLessons: 30,
    isInCart: false,
    badge: 'Best Seller',
    imageSrc: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop',
    imageAlt: 'UI/UX Design Fundamentals course thumbnail',
    author: {
      name: 'Emily Davis',
      avatarSrc:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'Emily Davis avatar',
      category: 'UI/UX Design',
    },
    meta: {
      duration: '15 Hours',
      lessonCount: 30,
      studentCount: 5400,
      level: CourseLevel.BEGINNER,
    },
    priceObject: {
      current: 69.99,
      old: 99.99,
      currency: '$',
    },
    seoTitle: 'UI/UX Design Fundamentals Course',
    seoDescription: 'Learn user experience and interface design',
    keywords: ['UI Design', 'UX Design', 'Figma', 'User Research'],
    reviews: [
      {
        id: 'r10',
        userId: 'u10',
        userName: 'Lisa Wang',
        userAvatar:
          'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          "Emily is an incredible designer and teacher. I went from knowing nothing about UX to redesigning my company's entire product. This course is a game-changer.",
        createdAt: new Date('2024-02-20'),
        updatedAt: new Date('2024-02-20'),
        helpful: 267,
      },
      {
        id: 'r11',
        userId: 'u11',
        userName: 'Alex Johnson',
        userAvatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          "Perfect for beginners. The Figma tutorials are especially good. I'm now designing interfaces for clients after just 3 weeks of this course.",
        createdAt: new Date('2024-03-05'),
        updatedAt: new Date('2024-03-05'),
        helpful: 89,
      },
      {
        id: 'r12',
        userId: 'u12',
        userName: 'Maria Rodriguez',
        userAvatar:
          'https://images.unsplash.com/photo-1494790108379-be9c2b0e5b41?w=100&h=100&fit=crop',
        rating: 4,
        comment:
          'Great foundational course. I wish there was more content on design systems and component libraries, but overall excellent.',
        createdAt: new Date('2024-03-15'),
        updatedAt: new Date('2024-03-15'),
        helpful: 56,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Free Course 5 (Featured)
  // ─────────────────────────────────────────────
  {
    id: '5',
    title: 'Python for Beginners',
    description: `<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  Start your programming journey with
  <strong style="color:#1E293B;">Python</strong>
  and build practical projects with
  <span style="color:#3776AB;font-weight:600;">
    real-world applications
  </span>.
</p>

<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  This free course covers all the fundamentals of Python programming with plenty of hands-on exercises.
</p>

<blockquote
  style="
    margin:20px 0;
    padding:16px 20px;
    border-left:4px solid #3776AB;
    background:#F8FAFC;
    color:#475569;
    font-size:15px;
    line-height:1.8;
    font-style:italic;
    border-radius:8px;
  ">
  Start coding with Python - no prior experience needed.
</blockquote>

<ul
  style="
    margin:0;
    padding-left:20px;
    color:#334155;
    font-size:16px;
    line-height:1.8;
  ">
  <li style="margin-bottom:10px;">
    ✔ Python Syntax & Fundamentals
  </li>

  <li style="margin-bottom:10px;">
    ✔ Data Structures & Algorithms
  </li>

  <li style="margin-bottom:10px;">
    ✔ Object-Oriented Programming
  </li>

  <li style="margin-bottom:10px;">
    ✔ File Handling & APIs
  </li>

  <li style="margin-bottom:0;">
    ✔ Real-world Projects
  </li>
</ul>`,
    shortDescription:
      'Start programming with Python through practical projects and real-world examples.',
    slug: 'python-for-beginners',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=450&fit=crop',
    category: CourseCategory.Development,
    level: CourseLevel.BEGINNER,
    duration: 20,
    instructor: {
      id: 'i5',
      name: 'David Lee',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      title: 'Python Instructor',
      bio: 'Passionate about teaching Python.',
    },
    rating: 4.7,
    ratingLabel: '4.7 (Highly Rated)',
    totalStudents: 15400,
    totalReviews: 1289,
    price: 0,
    isFree: true,
    createdAt: new Date('2024-04-01'),
    totalLessons: 40,
    isInCart: false,
    badge: 'Free',
    imageSrc: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=450&fit=crop',
    imageAlt: 'Python for Beginners course thumbnail',
    author: {
      name: 'David Lee',
      avatarSrc:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'David Lee avatar',
      category: 'Programming',
    },
    meta: {
      duration: '20 Hours',
      lessonCount: 40,
      studentCount: 15400,
      level: CourseLevel.BEGINNER,
    },
    priceObject: {
      current: 0,
      old: 0,
      currency: '$',
    },
    seoTitle: 'Python for Beginners - Free Course',
    seoDescription: 'Learn Python programming from scratch',
    keywords: ['Python', 'Programming', 'Beginners', 'Coding'],
    reviews: [
      {
        id: 'r13',
        userId: 'u13',
        userName: 'Kevin Kim',
        userAvatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          "Incredible free course! I've tried many free Python resources but this one is by far the best. David explains everything with such clarity. Can't believe it's free!",
        createdAt: new Date('2024-05-01'),
        updatedAt: new Date('2024-05-01'),
        helpful: 456,
      },
      {
        id: 'r14',
        userId: 'u14',
        userName: 'Amanda Foster',
        userAvatar:
          'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          "I'm a complete beginner and this course made learning Python so accessible. The projects are engaging and the support from the community is fantastic.",
        createdAt: new Date('2024-05-15'),
        updatedAt: new Date('2024-05-15'),
        helpful: 234,
      },
      {
        id: 'r15',
        userId: 'u15',
        userName: 'Robert Patel',
        userAvatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        rating: 4,
        comment:
          "Great course for beginners. Would appreciate more content on Python libraries like Pandas and NumPy, but I understand it's designed for absolute beginners.",
        createdAt: new Date('2024-06-01'),
        updatedAt: new Date('2024-06-01'),
        helpful: 89,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Advanced Course 6 (Featured)
  // ─────────────────────────────────────────────
  {
    id: '6',
    title: 'Machine Learning Essentials',
    description: `<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  Dive into
  <strong style="color:#1E293B;">Machine Learning</strong>
  with Python and
  <span style="color:#F7931E;font-weight:600;">
    scikit-learn
  </span>.
</p>

<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  This advanced course covers everything from data preprocessing to deploying ML models.
</p>

<blockquote
  style="
    margin:20px 0;
    padding:16px 20px;
    border-left:4px solid #F7931E;
    background:#F8FAFC;
    color:#475569;
    font-size:15px;
    line-height:1.8;
    font-style:italic;
    border-radius:8px;
  ">
  Build and deploy machine learning models with confidence.
</blockquote>

<ul
  style="
    margin:0;
    padding-left:20px;
    color:#334155;
    font-size:16px;
    line-height:1.8;
  ">
  <li style="margin-bottom:10px;">
    ✔ Supervised & Unsupervised Learning
  </li>

  <li style="margin-bottom:10px;">
    ✔ Regression & Classification
  </li>

  <li style="margin-bottom:10px;">
    ✔ Clustering & Dimensionality Reduction
  </li>

  <li style="margin-bottom:10px;">
    ✔ Model Evaluation & Tuning
  </li>

  <li style="margin-bottom:0;">
    ✔ Deployment with Flask
  </li>
</ul>`,
    shortDescription:
      'Introduction to machine learning algorithms using Python and scikit-learn with hands-on projects.',
    slug: 'machine-learning-essentials',
    thumbnail: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&h=450&fit=crop',
    category: CourseCategory.DataScience,
    level: CourseLevel.ADVANCED,
    duration: 30,
    instructor: {
      id: 'i6',
      name: 'Sophia Martinez',
      avatar:
        'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face',
      title: 'AI Researcher',
      bio: 'PhD in Artificial Intelligence.',
    },
    rating: 4.9,
    ratingLabel: '4.9 (Exceptional)',
    totalStudents: 6800,
    totalReviews: 598,
    price: 149.99,
    oldPrice: 199.99,
    isFree: false,
    createdAt: new Date('2024-03-18'),
    totalLessons: 60,
    isInCart: false,
    badge: 'Advanced',
    imageSrc: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&h=450&fit=crop',
    imageAlt: 'Machine Learning Essentials course thumbnail',
    author: {
      name: 'Sophia Martinez',
      avatarSrc:
        'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'Sophia Martinez avatar',
      category: 'Data Science',
    },
    meta: {
      duration: '30 Hours',
      lessonCount: 60,
      studentCount: 6800,
      level: CourseLevel.ADVANCED,
    },
    priceObject: {
      current: 149.99,
      old: 199.99,
      currency: '$',
    },
    seoTitle: 'Machine Learning Essentials - Advanced Course',
    seoDescription: 'Master machine learning with Python',
    keywords: ['Machine Learning', 'Python', 'AI', 'Data Science'],
    reviews: [
      {
        id: 'r16',
        userId: 'u16',
        userName: 'Dr. Alan Cooper',
        userAvatar:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          "Finally an ML course that bridges the gap between theory and practice. Sophia's academic background really shines through in the explanations.",
        createdAt: new Date('2024-05-10'),
        updatedAt: new Date('2024-05-10'),
        helpful: 312,
      },
      {
        id: 'r17',
        userId: 'u17',
        userName: 'Rachel Kim',
        userAvatar:
          'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          "I've taken several ML courses and this is hands-down the best. The practical projects and real-world datasets prepared me for my data science job.",
        createdAt: new Date('2024-05-20'),
        updatedAt: new Date('2024-05-20'),
        helpful: 178,
      },
      {
        id: 'r18',
        userId: 'u18',
        userName: 'Samuel Okafor',
        userAvatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        rating: 4,
        comment:
          'Challenging but rewarding. The math sections can be intense, but the practical code examples help make the concepts concrete. Great for aspiring ML engineers.',
        createdAt: new Date('2024-06-05'),
        updatedAt: new Date('2024-06-05'),
        helpful: 98,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Default Course 7
  // ─────────────────────────────────────────────
  {
    id: '7',
    title: 'Digital Marketing Bootcamp',
    description: `<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  Master
  <strong style="color:#1E293B;">Digital Marketing</strong>
  and drive real business results with
  <span style="color:#FBBC04;font-weight:600;">
    SEO, Google Ads, and Analytics
  </span>.
</p>

<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  This bootcamp covers all aspects of modern digital marketing with practical strategies.
</p>

<blockquote
  style="
    margin:20px 0;
    padding:16px 20px;
    border-left:4px solid #FBBC04;
    background:#F8FAFC;
    color:#475569;
    font-size:15px;
    line-height:1.8;
    font-style:italic;
    border-radius:8px;
  ">
  Learn digital marketing strategies that actually convert.
</blockquote>

<ul
  style="
    margin:0;
    padding-left:20px;
    color:#334155;
    font-size:16px;
    line-height:1.8;
  ">
  <li style="margin-bottom:10px;">
    ✔ SEO & Content Marketing
  </li>

  <li style="margin-bottom:10px;">
    ✔ Google Ads & PPC
  </li>

  <li style="margin-bottom:10px;">
    ✔ Email Marketing
  </li>

  <li style="margin-bottom:10px;">
    ✔ Social Media Strategy
  </li>

  <li style="margin-bottom:0;">
    ✔ Analytics & Data
  </li>
</ul>`,
    shortDescription:
      'Learn SEO, Google Ads, email marketing, and analytics for modern digital marketing.',
    slug: 'digital-marketing-bootcamp',
    thumbnail: 'https://images.unsplash.com/photo-1571485778080-d8e31af6f19a?w=800&h=450&fit=crop',
    category: CourseCategory.Marketing,
    level: CourseLevel.BEGINNER,
    duration: 16,
    instructor: {
      id: 'i7',
      name: 'Olivia White',
      avatar:
        'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=200&h=200&fit=crop&crop=face',
      title: 'Marketing Strategist',
      bio: 'Digital marketing consultant.',
    },
    rating: 4.5,
    ratingLabel: '4.5 (Great)',
    totalStudents: 4700,
    totalReviews: 387,
    price: 59.99,
    oldPrice: 79.99,
    isFree: false,
    createdAt: new Date('2024-02-28'),
    totalLessons: 32,
    isInCart: false,
    imageSrc: 'https://images.unsplash.com/photo-1571485778080-d8e31af6f19a?w=800&h=450&fit=crop',
    imageAlt: 'Digital Marketing Bootcamp course thumbnail',
    author: {
      name: 'Olivia White',
      avatarSrc:
        'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'Olivia White avatar',
      category: 'Marketing',
    },
    meta: {
      duration: '16 Hours',
      lessonCount: 32,
      studentCount: 4700,
      level: CourseLevel.BEGINNER,
    },
    priceObject: {
      current: 59.99,
      old: 79.99,
      currency: '$',
    },
    seoTitle: 'Digital Marketing Bootcamp - Complete Course',
    seoDescription: 'Learn digital marketing strategies',
    keywords: ['Digital Marketing', 'SEO', 'Google Ads', 'Analytics'],
    reviews: [
      {
        id: 'r19',
        userId: 'u19',
        userName: 'Michelle Lee',
        userAvatar:
          'https://images.unsplash.com/photo-1494790108379-be9c2b0e5b41?w=100&h=100&fit=crop',
        rating: 4,
        comment:
          "Really practical course for someone looking to get into digital marketing. The Google Ads section was particularly helpful. I've already started applying what I learned.",
        createdAt: new Date('2024-04-10'),
        updatedAt: new Date('2024-04-10'),
        helpful: 89,
      },
      {
        id: 'r20',
        userId: 'u20',
        userName: 'Chris Thompson',
        userAvatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          "Olivia is a great teacher. The content is up-to-date and very actionable. I've already seen a 30% increase in my blog traffic following the SEO strategies taught here.",
        createdAt: new Date('2024-04-20'),
        updatedAt: new Date('2024-04-20'),
        helpful: 167,
      },
      {
        id: 'r21',
        userId: 'u21',
        userName: 'Priya Sharma',
        userAvatar:
          'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop',
        rating: 4,
        comment:
          "Good overview for beginners. I would have liked more deep dives on specific channels, but for the price, it's excellent value.",
        createdAt: new Date('2024-05-01'),
        updatedAt: new Date('2024-05-01'),
        helpful: 45,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Default Course 8
  // ─────────────────────────────────────────────
  {
    id: '8',
    title: 'AWS Cloud Practitioner',
    description: `<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  Prepare for the
  <strong style="color:#1E293B;">AWS Cloud Practitioner</strong>
  certification with
  <span style="color:#FF9900;font-weight:600;">
    hands-on labs and practice exams
  </span>.
</p>

<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  This course covers all the core AWS services and prepares you for the certification exam.
</p>

<blockquote
  style="
    margin:20px 0;
    padding:16px 20px;
    border-left:4px solid #FF9900;
    background:#F8FAFC;
    color:#475569;
    font-size:15px;
    line-height:1.8;
    font-style:italic;
    border-radius:8px;
  ">
  Pass the AWS Cloud Practitioner exam on your first attempt.
</blockquote>

<ul
  style="
    margin:0;
    padding-left:20px;
    color:#334155;
    font-size:16px;
    line-height:1.8;
  ">
  <li style="margin-bottom:10px;">
    ✔ AWS Core Services (EC2, S3, RDS)
  </li>

  <li style="margin-bottom:10px;">
    ✔ Security & Compliance
  </li>

  <li style="margin-bottom:10px;">
    ✔ Pricing & Billing
  </li>

  <li style="margin-bottom:10px;">
    ✔ Hands-on Labs
  </li>

  <li style="margin-bottom:0;">
    ✔ Practice Exams
  </li>
</ul>`,
    shortDescription:
      'Prepare for the AWS Cloud Practitioner certification with hands-on labs and practice exams.',
    slug: 'aws-cloud-practitioner',
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=450&fit=crop',
    category: CourseCategory.Cloud,
    level: CourseLevel.INTERMEDIATE,
    duration: 19,
    instructor: {
      id: 'i8',
      name: 'James Anderson',
      avatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face',
      title: 'Cloud Solutions Architect',
      bio: 'AWS certified professional.',
    },
    rating: 4.8,
    ratingLabel: '4.8 (Excellent)',
    totalStudents: 7200,
    totalReviews: 612,
    price: 119.99,
    oldPrice: 159.99,
    isFree: false,
    createdAt: new Date('2024-04-10'),
    totalLessons: 38,
    isInCart: false,
    imageSrc: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=450&fit=crop',
    imageAlt: 'AWS Cloud Practitioner course thumbnail',
    author: {
      name: 'James Anderson',
      avatarSrc:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'James Anderson avatar',
      category: 'Cloud Computing',
    },
    meta: {
      duration: '19 Hours',
      lessonCount: 38,
      studentCount: 7200,
      level: CourseLevel.INTERMEDIATE,
    },
    priceObject: {
      current: 119.99,
      old: 159.99,
      currency: '$',
    },
    seoTitle: 'AWS Cloud Practitioner - Certification Course',
    seoDescription: 'Prepare for AWS Cloud Practitioner exam',
    keywords: ['AWS', 'Cloud', 'Certification', 'Cloud Computing'],
    reviews: [
      {
        id: 'r22',
        userId: 'u22',
        userName: 'Daniel Murphy',
        userAvatar:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          'Passed the AWS Cloud Practitioner exam with 950/1000 after taking this course. The practice exams are incredibly close to the real thing. Highly recommend!',
        createdAt: new Date('2024-05-15'),
        updatedAt: new Date('2024-05-15'),
        helpful: 389,
      },
      {
        id: 'r23',
        userId: 'u23',
        userName: 'Natasha Patel',
        userAvatar:
          'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          "Perfect for anyone new to AWS. James explains concepts in a way that's easy to understand. The hands-on labs really helped cement the knowledge.",
        createdAt: new Date('2024-05-25'),
        updatedAt: new Date('2024-05-25'),
        helpful: 234,
      },
      {
        id: 'r24',
        userId: 'u24',
        userName: 'Omar Hassan',
        userAvatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        rating: 4,
        comment:
          'Great course content. I passed the exam, but I wish there were more practical exercises for the more advanced AWS services. Still, excellent value for money.',
        createdAt: new Date('2024-06-01'),
        updatedAt: new Date('2024-06-01'),
        helpful: 67,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Featured Course 9
  // ─────────────────────────────────────────────
  {
    id: '9',
    title: 'Flutter Mobile Development',
    description: `<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  Build beautiful
  <strong style="color:#1E293B;">iOS and Android apps</strong>
  with
  <span style="color:#02569B;font-weight:600;">
    Flutter and Dart
  </span>.
</p>

<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  This comprehensive course covers everything from Flutter basics to advanced state management.
</p>

<blockquote
  style="
    margin:20px 0;
    padding:16px 20px;
    border-left:4px solid #02569B;
    background:#F8FAFC;
    color:#475569;
    font-size:15px;
    line-height:1.8;
    font-style:italic;
    border-radius:8px;
  ">
  Build cross-platform apps with Flutter - one codebase, two platforms.
</blockquote>

<ul
  style="
    margin:0;
    padding-left:20px;
    color:#334155;
    font-size:16px;
    line-height:1.8;
  ">
  <li style="margin-bottom:10px;">
    ✔ Flutter Widgets & Layouts
  </li>

  <li style="margin-bottom:10px;">
    ✔ State Management (Provider, Riverpod)
  </li>

  <li style="margin-bottom:10px;">
    ✔ Firebase Integration
  </li>

  <li style="margin-bottom:10px;">
    ✔ REST API Integration
  </li>

  <li style="margin-bottom:0;">
    ✔ App Deployment (iOS & Android)
  </li>
</ul>`,
    shortDescription:
      'Build Android and iOS apps using Flutter and Dart with firebase integration.',
    slug: 'flutter-mobile-development',
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=450&fit=crop',
    category: CourseCategory.MobileDevelopment,
    level: CourseLevel.INTERMEDIATE,
    duration: 24,
    instructor: {
      id: 'i9',
      name: 'Emma Taylor',
      avatar:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face',
      title: 'Mobile Developer',
      bio: 'Cross-platform application expert.',
    },
    rating: 4.7,
    ratingLabel: '4.7 (Highly Rated)',
    totalStudents: 5100,
    totalReviews: 456,
    price: 109.99,
    oldPrice: 149.99,
    isFree: false,
    createdAt: new Date('2024-05-08'),
    totalLessons: 48,
    isInCart: false,
    badge: 'Trending',
    imageSrc: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=450&fit=crop',
    imageAlt: 'Flutter Mobile Development course thumbnail',
    author: {
      name: 'Emma Taylor',
      avatarSrc:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'Emma Taylor avatar',
      category: 'Mobile Development',
    },
    meta: {
      duration: '24 Hours',
      lessonCount: 48,
      studentCount: 5100,
      level: CourseLevel.INTERMEDIATE,
    },
    priceObject: {
      current: 109.99,
      old: 149.99,
      currency: '$',
    },
    seoTitle: 'Flutter Mobile Development - Complete Course',
    seoDescription: 'Build cross-platform mobile apps with Flutter',
    keywords: ['Flutter', 'Dart', 'Mobile Development', 'iOS', 'Android'],
    reviews: [
      {
        id: 'r25',
        userId: 'u25',
        userName: 'Grace Lin',
        userAvatar:
          'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          "This course transformed my career! I was a web developer and now I'm building mobile apps for startups. Emma's teaching is clear, practical, and engaging.",
        createdAt: new Date('2024-06-10'),
        updatedAt: new Date('2024-06-10'),
        helpful: 289,
      },
      {
        id: 'r26',
        userId: 'u26',
        userName: 'Tom Anderson',
        userAvatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        rating: 4,
        comment:
          'Great course for intermediate Flutter developers. The Firebase integration section was particularly valuable. I wish there was more content on testing.',
        createdAt: new Date('2024-06-20'),
        updatedAt: new Date('2024-06-20'),
        helpful: 78,
      },
      {
        id: 'r27',
        userId: 'u27',
        userName: 'Sofia Garcia',
        userAvatar:
          'https://images.unsplash.com/photo-1494790108379-be9c2b0e5b41?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          "I tried learning Flutter from documentation and YouTube, but Emma's course made it all click. The projects are real-world and the code is production-ready.",
        createdAt: new Date('2024-07-01'),
        updatedAt: new Date('2024-07-01'),
        helpful: 145,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Featured Course 10
  // ─────────────────────────────────────────────
  {
    id: '10',
    title: 'Cybersecurity Fundamentals',
    description: `<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  Understand
  <strong style="color:#1E293B;">Ethical Hacking</strong>
  and
  <span style="color:#00A98E;font-weight:600;">
    Cybersecurity Defense Strategies
  </span>.
</p>

<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  This advanced course covers network security, ethical hacking, and cyber defense techniques.
</p>

<blockquote
  style="
    margin:20px 0;
    padding:16px 20px;
    border-left:4px solid #00A98E;
    background:#F8FAFC;
    color:#475569;
    font-size:15px;
    line-height:1.8;
    font-style:italic;
    border-radius:8px;
  ">
  Learn to think like a hacker to defend like a professional.
</blockquote>

<ul
  style="
    margin:0;
    padding-left:20px;
    color:#334155;
    font-size:16px;
    line-height:1.8;
  ">
  <li style="margin-bottom:10px;">
    ✔ Network Security
  </li>

  <li style="margin-bottom:10px;">
    ✔ Ethical Hacking Tools
  </li>

  <li style="margin-bottom:10px;">
    ✔ Vulnerability Assessment
  </li>

  <li style="margin-bottom:10px;">
    ✔ Encryption & Cryptography
  </li>

  <li style="margin-bottom:0;">
    ✔ Security Best Practices
  </li>
</ul>`,
    shortDescription: 'Understand ethical hacking, network security, and cyber defense strategies.',
    slug: 'cybersecurity-fundamentals',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=450&fit=crop',
    category: CourseCategory.Security,
    level: CourseLevel.ADVANCED,
    duration: 28,
    instructor: {
      id: 'i10',
      name: 'Daniel Clark',
      avatar:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face',
      title: 'Cybersecurity Consultant',
      bio: 'Certified ethical hacker and security consultant.',
    },
    rating: 4.9,
    ratingLabel: '4.9 (Exceptional)',
    totalStudents: 4300,
    totalReviews: 389,
    price: 129.99,
    oldPrice: 179.99,
    isFree: false,
    createdAt: new Date('2024-05-20'),
    totalLessons: 56,
    isInCart: false,
    badge: 'Expert',
    imageSrc: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=450&fit=crop',
    imageAlt: 'Cybersecurity Fundamentals course thumbnail',
    author: {
      name: 'Daniel Clark',
      avatarSrc:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'Daniel Clark avatar',
      category: 'Security',
    },
    meta: {
      duration: '28 Hours',
      lessonCount: 56,
      studentCount: 4300,
      level: CourseLevel.ADVANCED,
    },
    priceObject: {
      current: 129.99,
      old: 179.99,
      currency: '$',
    },
    seoTitle: 'Cybersecurity Fundamentals - Advanced Course',
    seoDescription: 'Learn cybersecurity and ethical hacking',
    keywords: ['Cybersecurity', 'Ethical Hacking', 'Network Security', 'Cyber Defense'],
    reviews: [
      {
        id: 'r28',
        userId: 'u28',
        userName: 'Jason Miller',
        userAvatar:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          "Daniel is an expert in the field. This course is as good as many cybersecurity bootcamps I've seen. The practical labs are challenging and realistic.",
        createdAt: new Date('2024-07-10'),
        updatedAt: new Date('2024-07-10'),
        helpful: 423,
      },
      {
        id: 'r29',
        userId: 'u29',
        userName: 'Aisha Patel',
        userAvatar:
          'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          "I'm transitioning from IT support to cybersecurity and this course was invaluable. Daniel covers all the essential topics in depth. I'm now preparing for the CEH exam.",
        createdAt: new Date('2024-07-20'),
        updatedAt: new Date('2024-07-20'),
        helpful: 198,
      },
      {
        id: 'r30',
        userId: 'u30',
        userName: 'Carlos Rodriguez',
        userAvatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        rating: 4,
        comment:
          "Excellent course, but some sections require prior networking knowledge. If you're starting from scratch, you might need to review some basics first. Still, highly recommended.",
        createdAt: new Date('2024-08-01'),
        updatedAt: new Date('2024-08-01'),
        helpful: 89,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Additional Default Course 11
  // ─────────────────────────────────────────────
  {
    id: '11',
    title: 'Vue.js Masterclass',
    description: `<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  Build modern web applications with
  <strong style="color:#1E293B;">Vue.js</strong>
  and
  <span style="color:#4FC08D;font-weight:600;">
    Vuex, Vue Router, and Composition API
  </span>.
</p>

<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  This comprehensive course covers all aspects of Vue.js development for beginners and intermediates.
</p>

<blockquote
  style="
    margin:20px 0;
    padding:16px 20px;
    border-left:4px solid #4FC08D;
    background:#F8FAFC;
    color:#475569;
    font-size:15px;
    line-height:1.8;
    font-style:italic;
    border-radius:8px;
  ">
  Build scalable and maintainable Vue.js applications.
</blockquote>

<ul
  style="
    margin:0;
    padding-left:20px;
    color:#334155;
    font-size:16px;
    line-height:1.8;
  ">
  <li style="margin-bottom:10px;">
    ✔ Vue.js Fundamentals
  </li>

  <li style="margin-bottom:10px;">
    ✔ Composition API
  </li>

  <li style="margin-bottom:10px;">
    ✔ State Management with Vuex
  </li>

  <li style="margin-bottom:10px;">
    ✔ Vue Router
  </li>

  <li style="margin-bottom:0;">
    ✔ Unit Testing with Vitest
  </li>
</ul>`,
    shortDescription: 'Build modern web applications with Vue.js, Vuex, and Vue Router.',
    slug: 'vuejs-masterclass',
    thumbnail: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=450&fit=crop',
    category: CourseCategory.Development,
    level: CourseLevel.INTERMEDIATE,
    duration: 20,
    instructor: {
      id: 'i11',
      name: 'Robert Chen',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      title: 'Full Stack Developer',
      bio: 'Vue.js core team member.',
    },
    rating: 4.8,
    ratingLabel: '4.8 (Excellent)',
    totalStudents: 3500,
    totalReviews: 289,
    price: 89.99,
    oldPrice: 119.99,
    isFree: false,
    createdAt: new Date('2024-06-01'),
    totalLessons: 40,
    isInCart: false,
    imageSrc: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=450&fit=crop',
    imageAlt: 'Vue.js Masterclass course thumbnail',
    author: {
      name: 'Robert Chen',
      avatarSrc:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'Robert Chen avatar',
      category: 'Web Development',
    },
    meta: {
      duration: '20 Hours',
      lessonCount: 40,
      studentCount: 3500,
      level: CourseLevel.INTERMEDIATE,
    },
    priceObject: {
      current: 89.99,
      old: 119.99,
      currency: '$',
    },
    seoTitle: 'Vue.js Masterclass - Complete Course',
    seoDescription: 'Build modern web applications with Vue.js',
    keywords: ['Vue.js', 'Vuex', 'Composition API', 'JavaScript'],
    reviews: [
      {
        id: 'r31',
        userId: 'u31',
        userName: 'Stephanie Park',
        userAvatar:
          'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          'Robert is a fantastic teacher. As a Vue.js core team member, his insights are invaluable. This course helped me land my first job as a Vue developer.',
        createdAt: new Date('2024-08-10'),
        updatedAt: new Date('2024-08-10'),
        helpful: 267,
      },
      {
        id: 'r32',
        userId: 'u32',
        userName: 'Brian Wilson',
        userAvatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          "I've been using Vue for 2 years and still learned new things. The Composition API section is especially well done. Highly recommend for anyone serious about Vue.",
        createdAt: new Date('2024-08-20'),
        updatedAt: new Date('2024-08-20'),
        helpful: 156,
      },
      {
        id: 'r33',
        userId: 'u33',
        userName: 'Maya Johnson',
        userAvatar:
          'https://images.unsplash.com/photo-1494790108379-be9c2b0e5b41?w=100&h=100&fit=crop',
        rating: 4,
        comment:
          "Great course overall. I would have liked more content on Vue 3's new features and some deeper dives into performance optimization. Still, very solid content.",
        createdAt: new Date('2024-09-01'),
        updatedAt: new Date('2024-09-01'),
        helpful: 78,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Additional Default Course 12
  // ─────────────────────────────────────────────
  {
    id: '12',
    title: 'GraphQL with Apollo',
    description: `<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  Build efficient APIs with
  <strong style="color:#1E293B;">GraphQL</strong>
  and
  <span style="color:#311C87;font-weight:600;">
    Apollo Server
  </span>
  with client-side integration.
</p>

<p style="margin:0 0 16px;color:#475569;font-size:16px;line-height:1.8;">
  This course teaches you everything about GraphQL from schema design to production deployment.
</p>

<blockquote
  style="
    margin:20px 0;
    padding:16px 20px;
    border-left:4px solid #311C87;
    background:#F8FAFC;
    color:#475569;
    font-size:15px;
    line-height:1.8;
    font-style:italic;
    border-radius:8px;
  ">
  Build flexible and performant APIs with GraphQL and Apollo.
</blockquote>

<ul
  style="
    margin:0;
    padding-left:20px;
    color:#334155;
    font-size:16px;
    line-height:1.8;
  ">
  <li style="margin-bottom:10px;">
    ✔ GraphQL Schema Design
  </li>

  <li style="margin-bottom:10px;">
    ✔ Apollo Server & Client
  </li>

  <li style="margin-bottom:10px;">
    ✔ Resolvers & Data Sources
  </li>

  <li style="margin-bottom:10px;">
    ✔ Authentication & Authorization
  </li>

  <li style="margin-bottom:0;">
    ✔ Caching & Performance
  </li>
</ul>`,
    shortDescription:
      'Build efficient APIs with GraphQL and Apollo Server with client-side integration.',
    slug: 'graphql-with-apollo',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    category: CourseCategory.Development,
    level: CourseLevel.INTERMEDIATE,
    duration: 14,
    instructor: {
      id: 'i12',
      name: 'Lisa Park',
      avatar:
        'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face',
      title: 'API Engineer',
      bio: 'GraphQL specialist and REST API expert.',
    },
    rating: 4.6,
    ratingLabel: '4.6 (Very Good)',
    totalStudents: 2800,
    totalReviews: 234,
    price: 74.99,
    oldPrice: 99.99,
    isFree: false,
    createdAt: new Date('2024-06-15'),
    totalLessons: 28,
    isInCart: false,
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    imageAlt: 'GraphQL with Apollo course thumbnail',
    author: {
      name: 'Lisa Park',
      avatarSrc:
        'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face',
      avatarAlt: 'Lisa Park avatar',
      category: 'API Development',
    },
    meta: {
      duration: '14 Hours',
      lessonCount: 28,
      studentCount: 2800,
      level: CourseLevel.INTERMEDIATE,
    },
    priceObject: {
      current: 74.99,
      old: 99.99,
      currency: '$',
    },
    seoTitle: 'GraphQL with Apollo - Complete Course',
    seoDescription: 'Build efficient GraphQL APIs with Apollo',
    keywords: ['GraphQL', 'Apollo', 'API', 'JavaScript'],
    reviews: [
      {
        id: 'r34',
        userId: 'u34',
        userName: 'Elena Volkov',
        userAvatar:
          'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          "This course made GraphQL accessible and practical. Lisa breaks down complex concepts into easy-to-understand lessons. I'm now building GraphQL APIs at my job.",
        createdAt: new Date('2024-08-15'),
        updatedAt: new Date('2024-08-15'),
        helpful: 198,
      },
      {
        id: 'r35',
        userId: 'u35',
        userName: 'David Morrison',
        userAvatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        rating: 4,
        comment:
          'Great course for anyone transitioning from REST to GraphQL. The Apollo Client integration with React examples were particularly helpful. Would have liked more on subscriptions.',
        createdAt: new Date('2024-08-30'),
        updatedAt: new Date('2024-08-30'),
        helpful: 89,
      },
      {
        id: 'r36',
        userId: 'u36',
        userName: 'Fatima Al-Hassan',
        userAvatar:
          'https://images.unsplash.com/photo-1494790108379-be9c2b0e5b41?w=100&h=100&fit=crop',
        rating: 5,
        comment:
          "Lisa is an excellent instructor. The hands-on projects really helped me understand how GraphQL works in production. I've already started using what I learned in my company's projects.",
        createdAt: new Date('2024-09-10'),
        updatedAt: new Date('2024-09-10'),
        helpful: 134,
      },
    ],
  },
];

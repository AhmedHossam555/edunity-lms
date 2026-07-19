import { ICourse } from '../interfaces';
import { CourseCategory, CourseLevel } from '../enums';

export const MOCK_COURSES: ICourse[] = [
  // ─────────────────────────────────────────────
  // Featured Course 1
  // ─────────────────────────────────────────────
  {
    id: '1',
    title: 'Angular Mastery: From Zero to Hero',
    description:
      'Complete Angular course covering everything from fundamentals to advanced concepts including RxJS, NgRx, and performance optimization.',
    slug: 'angular-mastery-from-zero-to-hero',
    thumbnail: 'https://images.unsplash.com/photo-1581276170525-94f1f9b6a6dd?w=800&h=450&fit=crop',
    category: CourseCategory.Development,
    level: CourseLevel.Intermediate,
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
      level: CourseLevel.Intermediate,
    },
    priceObject: {
      current: 99.99,
      old: 149.99,
      currency: '$',
    },
    seoTitle: 'Angular Mastery - Complete Angular Course',
    seoDescription: 'Learn Angular from scratch to advanced concepts',
    keywords: ['Angular', 'JavaScript', 'Frontend', 'RxJS'],
  },

  // ─────────────────────────────────────────────
  // Featured Course 2
  // ─────────────────────────────────────────────
  {
    id: '2',
    title: 'React Complete Guide 2024',
    description:
      'Learn React, Hooks, Context API, and modern frontend architecture with real-world projects.',
    slug: 'react-complete-guide',
    thumbnail: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=450&fit=crop',
    category: CourseCategory.Development,
    level: CourseLevel.Beginner,
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
      level: CourseLevel.Beginner,
    },
    priceObject: {
      current: 89.99,
      old: 129.99,
      currency: '$',
    },
    seoTitle: 'React Complete Guide - Modern React Course',
    seoDescription: 'Master React with hooks and context API',
    keywords: ['React', 'Hooks', 'Context API', 'JavaScript'],
  },

  // ─────────────────────────────────────────────
  // Featured Course 3
  // ─────────────────────────────────────────────
  {
    id: '3',
    title: 'Node.js API Development Masterclass',
    description:
      'Build scalable REST APIs with Node.js, Express, and MongoDB with authentication and testing.',
    slug: 'nodejs-api-development',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=450&fit=crop',
    category: CourseCategory.Development,
    level: CourseLevel.Intermediate,
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
      level: CourseLevel.Intermediate,
    },
    priceObject: {
      current: 79.99,
      old: 109.99,
      currency: '$',
    },
    seoTitle: 'Node.js API Development - Complete Course',
    seoDescription: 'Build scalable REST APIs with Node.js',
    keywords: ['Node.js', 'Express', 'MongoDB', 'REST API'],
  },

  // ─────────────────────────────────────────────
  // Default Course 4
  // ─────────────────────────────────────────────
  {
    id: '4',
    title: 'UI/UX Design Fundamentals',
    description:
      'Master user experience principles and modern UI design with Figma and user research.',
    slug: 'ui-ux-design-fundamentals',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop',
    category: CourseCategory.Design,
    level: CourseLevel.Beginner,
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
      level: CourseLevel.Beginner,
    },
    priceObject: {
      current: 69.99,
      old: 99.99,
      currency: '$',
    },
    seoTitle: 'UI/UX Design Fundamentals Course',
    seoDescription: 'Learn user experience and interface design',
    keywords: ['UI Design', 'UX Design', 'Figma', 'User Research'],
  },

  // ─────────────────────────────────────────────
  // Free Course 5 (Featured)
  // ─────────────────────────────────────────────
  {
    id: '5',
    title: 'Python for Beginners',
    description:
      'Start programming with Python through practical projects and real-world examples.',
    slug: 'python-for-beginners',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=450&fit=crop',
    category: CourseCategory.Development,
    level: CourseLevel.Beginner,
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
      level: CourseLevel.Beginner,
    },
    priceObject: {
      current: 0,
      old: 0,
      currency: '$',
    },
    seoTitle: 'Python for Beginners - Free Course',
    seoDescription: 'Learn Python programming from scratch',
    keywords: ['Python', 'Programming', 'Beginners', 'Coding'],
  },

  // ─────────────────────────────────────────────
  // Advanced Course 6 (Featured)
  // ─────────────────────────────────────────────
  {
    id: '6',
    title: 'Machine Learning Essentials',
    description:
      'Introduction to machine learning algorithms using Python and scikit-learn with hands-on projects.',
    slug: 'machine-learning-essentials',
    thumbnail: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&h=450&fit=crop',
    category: CourseCategory.DataScience,
    level: CourseLevel.Advanced,
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
      level: CourseLevel.Advanced,
    },
    priceObject: {
      current: 149.99,
      old: 199.99,
      currency: '$',
    },
    seoTitle: 'Machine Learning Essentials - Advanced Course',
    seoDescription: 'Master machine learning with Python',
    keywords: ['Machine Learning', 'Python', 'AI', 'Data Science'],
  },

  // ─────────────────────────────────────────────
  // Default Course 7
  // ─────────────────────────────────────────────
  {
    id: '7',
    title: 'Digital Marketing Bootcamp',
    description:
      'Learn SEO, Google Ads, email marketing, and analytics for modern digital marketing.',
    slug: 'digital-marketing-bootcamp',
    thumbnail: 'https://images.unsplash.com/photo-1571485778080-d8e31af6f19a?w=800&h=450&fit=crop',
    category: CourseCategory.Marketing,
    level: CourseLevel.Beginner,
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
      level: CourseLevel.Beginner,
    },
    priceObject: {
      current: 59.99,
      old: 79.99,
      currency: '$',
    },
    seoTitle: 'Digital Marketing Bootcamp - Complete Course',
    seoDescription: 'Learn digital marketing strategies',
    keywords: ['Digital Marketing', 'SEO', 'Google Ads', 'Analytics'],
  },

  // ─────────────────────────────────────────────
  // Default Course 8
  // ─────────────────────────────────────────────
  {
    id: '8',
    title: 'AWS Cloud Practitioner',
    description:
      'Prepare for the AWS Cloud Practitioner certification with hands-on labs and practice exams.',
    slug: 'aws-cloud-practitioner',
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=450&fit=crop',
    category: CourseCategory.Cloud,
    level: CourseLevel.Intermediate,
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
      level: CourseLevel.Intermediate,
    },
    priceObject: {
      current: 119.99,
      old: 159.99,
      currency: '$',
    },
    seoTitle: 'AWS Cloud Practitioner - Certification Course',
    seoDescription: 'Prepare for AWS Cloud Practitioner exam',
    keywords: ['AWS', 'Cloud', 'Certification', 'Cloud Computing'],
  },

  // ─────────────────────────────────────────────
  // Featured Course 9
  // ─────────────────────────────────────────────
  {
    id: '9',
    title: 'Flutter Mobile Development',
    description: 'Build Android and iOS apps using Flutter and Dart with firebase integration.',
    slug: 'flutter-mobile-development',
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=450&fit=crop',
    category: CourseCategory.MobileDevelopment,
    level: CourseLevel.Intermediate,
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
      level: CourseLevel.Intermediate,
    },
    priceObject: {
      current: 109.99,
      old: 149.99,
      currency: '$',
    },
    seoTitle: 'Flutter Mobile Development - Complete Course',
    seoDescription: 'Build cross-platform mobile apps with Flutter',
    keywords: ['Flutter', 'Dart', 'Mobile Development', 'iOS', 'Android'],
  },

  // ─────────────────────────────────────────────
  // Featured Course 10
  // ─────────────────────────────────────────────
  {
    id: '10',
    title: 'Cybersecurity Fundamentals',
    description: 'Understand ethical hacking, network security, and cyber defense strategies.',
    slug: 'cybersecurity-fundamentals',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=450&fit=crop',
    category: CourseCategory.Security,
    level: CourseLevel.Advanced,
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
      level: CourseLevel.Advanced,
    },
    priceObject: {
      current: 129.99,
      old: 179.99,
      currency: '$',
    },
    seoTitle: 'Cybersecurity Fundamentals - Advanced Course',
    seoDescription: 'Learn cybersecurity and ethical hacking',
    keywords: ['Cybersecurity', 'Ethical Hacking', 'Network Security', 'Cyber Defense'],
  },

  // ─────────────────────────────────────────────
  // Additional Default Course 11
  // ─────────────────────────────────────────────
  {
    id: '11',
    title: 'Vue.js Masterclass',
    description: 'Build modern web applications with Vue.js, Vuex, and Vue Router.',
    slug: 'vuejs-masterclass',
    thumbnail: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=450&fit=crop',
    category: CourseCategory.Development,
    level: CourseLevel.Intermediate,
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
      level: CourseLevel.Intermediate,
    },
    priceObject: {
      current: 89.99,
      old: 119.99,
      currency: '$',
    },
  },

  // ─────────────────────────────────────────────
  // Additional Default Course 12
  // ─────────────────────────────────────────────
  {
    id: '12',
    title: 'GraphQL with Apollo',
    description:
      'Build efficient APIs with GraphQL and Apollo Server with client-side integration.',
    slug: 'graphql-with-apollo',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    category: CourseCategory.Development,
    level: CourseLevel.Intermediate,
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
      level: CourseLevel.Intermediate,
    },
    priceObject: {
      current: 74.99,
      old: 99.99,
      currency: '$',
    },
  },
];

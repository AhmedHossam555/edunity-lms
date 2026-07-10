import { CourseCategory } from '../enums';
import { ICommunityEventsSectionConfig } from '../interfaces';

// ─────────────────────────────────────────────────────────────
// Community Events Section Configuration
// ─────────────────────────────────────────────────────────────

/**
 * Static section content/data extracted from the original HTML markup.
 * Kept as a single typed constant so the component stays declarative
 * and the template only iterates over data.
 */
export const COMMUNITY_EVENTS_SECTION_CONFIG: ICommunityEventsSectionConfig = {
  badge: 'OUR COURSES',
  heading: 'Creating A Community Of Life Long Learners.',
  ctaLabel: 'EXPLORE COURSES',

  // ─────────────────────────────────────────────────────────────
  // Featured Courses
  // ─────────────────────────────────────────────────────────────

  courses: [
    {
      id: 'course-1',
      imageUrl:
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600',
      imageAlt: 'Students studying',
      tag: 'Digital Learning',
      rating: { value: '4.5K' },
      title: 'It Statistics Data Science And Business Analysis',
      meta: {
        lessons: 10,
        duration: '10h 30m',
        students: '20+',
      },
      author: {
        name: 'Samantha',
        avatarUrl:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
      },
      category: CourseCategory.Development,
      price: {
        current: 55,
        old: 85,
        currency: '$',
      },
    },
    {
      id: 'course-2',
      imageUrl:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600',
      imageAlt: 'Group studying',
      tag: 'Digital Learning',
      rating: { value: '4.5K' },
      title: 'It Statistics Data Science And Business Analysis',
      meta: {
        lessons: 10,
        duration: '10h 30m',
        students: '20+',
      },
      author: {
        name: 'Charles',
        avatarUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
      },
      category: CourseCategory.Development,
      price: {
        current: 55,
        old: 85,
        currency: '$',
      },
    },
    {
      id: 'course-3',
      imageUrl:
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600',
      imageAlt: 'Diverse students',
      tag: 'Digital Learning',
      rating: { value: '4.5K' },
      title: 'It Statistics Data Science And Business Analysis',
      meta: {
        lessons: 10,
        duration: '10h 30m',
        students: '20+',
      },
      author: {
        name: 'Morgan',
        avatarUrl:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
      },
      category: CourseCategory.Development,
      price: {
        current: 55,
        old: 85,
        currency: '$',
      },
    },
  ],
};
import { IInstructor, IBreakpoint, ISectionConfig } from '../interfaces';

// ─────────────────────────────────────────────────────────────
// Instructors Data
// ─────────────────────────────────────────────────────────────

export const INSTRUCTORS: IInstructor[] = [
  {
    id: 1,
    name: 'Michael Hammond',
    role: 'Teacher',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Cheryl Curry',
    role: 'Teacher',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Willie Diaz',
    role: 'Teacher',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    id: 4,
    name: 'Jimmy Sifuentes',
    role: 'Teacher',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
  },
  {
    id: 5,
    name: 'John Smith',
    role: 'Teacher',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
];

// ─────────────────────────────────────────────────────────────
// Responsive Breakpoints
// ─────────────────────────────────────────────────────────────

export const BREAKPOINTS: IBreakpoint[] = [
  { maxWidth: 600, cardsPerView: 1 },
  { maxWidth: 992, cardsPerView: 2 },
  { maxWidth: 1200, cardsPerView: 3 },
  { maxWidth: Infinity, cardsPerView: 4 },
];

// ─────────────────────────────────────────────────────────────
// Section Configuration
// ─────────────────────────────────────────────────────────────

export const SECTION_CONFIG: ISectionConfig = {
  label: 'Teacher',
  title: 'Meet Our Instructor',
  gap: 40,
  mobileGap: 20,
  carouselTransition: '0.55s',
  cardAnimationDelay: 90,
  cardShadow: '0 4px 6px rgba(14, 42, 70, 0.08)',
  cardShadowHover: '0 16px 28px rgba(14, 42, 70, 0.14)',
};
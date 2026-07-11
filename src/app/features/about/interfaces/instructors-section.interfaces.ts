// ─────────────────────────────────────────────────────────────
// Instructor
// ─────────────────────────────────────────────────────────────

export interface IInstructor {
  id: number;
  name: string;
  role: string;
  image: string;
}

// ─────────────────────────────────────────────────────────────
// Responsive Breakpoint
// ─────────────────────────────────────────────────────────────

export interface IBreakpoint {
  maxWidth: number;
  cardsPerView: number;
}

// ─────────────────────────────────────────────────────────────
// Section Configuration
// ─────────────────────────────────────────────────────────────

export interface ISectionConfig {
  label: string;
  title: string;
  gap: number;
  mobileGap: number;
  carouselTransition: string;
  cardAnimationDelay: number;
  cardShadow: string;
  cardShadowHover: string;
}

// ─────────────────────────────────────────────────────────────
// Carousel State
// ─────────────────────────────────────────────────────────────

export interface ICarouselState {
  currentIndex: number;
  cardsPerView: number;
  maxIndex: number;
  translateX: string;
}
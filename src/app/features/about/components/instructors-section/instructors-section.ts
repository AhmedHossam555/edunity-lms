import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  PLATFORM_ID,
  ViewChild,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';

import { IInstructor, IBreakpoint, ICarouselState } from '../../interfaces';
import { ECarouselDirection } from '../../enums';
import { SECTION_CONFIG, BREAKPOINTS, INSTRUCTORS } from '../../configs';
import { safeSvg } from '../../../../shared/utils/svg.util';
import { ICON_MAP } from '../../constants';

@Component({
  selector: 'app-instructors-section',
  standalone: true,
  templateUrl: './instructors-section.html',
  styleUrls: ['./instructors-section.scss'],
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstructorsSection implements AfterViewInit {

  // ─────────────────────────────────────────────────────────────
  // Readonly Configuration
  // ─────────────────────────────────────────────────────────────

  protected readonly CONFIG = SECTION_CONFIG;
  protected readonly ICONS = ICON_MAP;
  protected readonly BREAKPOINTS_CONFIG = BREAKPOINTS;

  // ─────────────────────────────────────────────────────────────
  // Template Enums
  // ─────────────────────────────────────────────────────────────

  protected readonly ECarouselDirection = ECarouselDirection;

  // ─────────────────────────────────────────────────────────────
  // Dependency Injection
  // ─────────────────────────────────────────────────────────────

  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly sanitizer = inject(DomSanitizer);

  // ─────────────────────────────────────────────────────────────
  // Safe SVG Icons
  // ─────────────────────────────────────────────────────────────

  protected readonly safeIcons = {
    teacher: safeSvg(this.sanitizer, ICON_MAP.teacher),
    prev: safeSvg(this.sanitizer, ICON_MAP.prev),
    next: safeSvg(this.sanitizer, ICON_MAP.next),
    share: safeSvg(this.sanitizer, ICON_MAP.share),
  } as const;

  // ─────────────────────────────────────────────────────────────
  // Signals
  // ─────────────────────────────────────────────────────────────

  protected readonly instructors = signal<IInstructor[]>(INSTRUCTORS);
  protected readonly currentIndex = signal<number>(0);
  private readonly cardWidth = signal<number>(0);
  private readonly gap = signal<number>(this.CONFIG.gap);
  private readonly viewportWidth = signal<number>(0);
  private readonly isInitialized = signal<boolean>(false);
  private readonly visibleCards = signal<number>(4);

  // ─────────────────────────────────────────────────────────────
  // Private Properties
  // ─────────────────────────────────────────────────────────────

  private resizeTimeoutId: ReturnType<typeof setTimeout> | null = null;

  // ─────────────────────────────────────────────────────────────
  // ViewChild References
  // ─────────────────────────────────────────────────────────────

  @ViewChild('viewport', { static: true })
  private viewport!: ElementRef<HTMLElement>;

  // ─────────────────────────────────────────────────────────────
  // Computed Signals
  // ─────────────────────────────────────────────────────────────

  protected readonly cardsPerView = computed<number>(() =>
    this.getCardsPerView(this.viewportWidth())
  );

  protected readonly maxIndex = computed<number>(() =>
    Math.max(0, this.instructors().length - this.visibleCards())
  );

  protected readonly translate = computed<string>(() =>
    `translateX(-${this.currentIndex() * this.cardWidth()}px)`
  );

  protected readonly isPrevDisabled = computed<boolean>(() =>
    this.currentIndex() === 0
  );

  protected readonly isNextDisabled = computed<boolean>(() =>
    this.currentIndex() >= this.maxIndex()
  );

  protected readonly carouselState = computed<ICarouselState>(() => ({
    currentIndex: this.currentIndex(),
    cardsPerView: this.cardsPerView(),
    maxIndex: this.maxIndex(),
    translateX: this.translate(),
  }));

  // ─────────────────────────────────────────────────────────────
  // Constructor
  // ─────────────────────────────────────────────────────────────

  constructor() {
    this.setupAutoCorrectEffect();
    this.setupCleanup();
  }

  // ─────────────────────────────────────────────────────────────
  // Lifecycle Hooks
  // ─────────────────────────────────────────────────────────────

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    requestAnimationFrame(() => {
      this.measure();
      this.isInitialized.set(true);
    });
  }

  @HostListener('window:resize')
  protected onResize(): void {
    if (!this.isInitialized()) return;
    this.debounce(() => this.measure(), 150);
  }

  // ─────────────────────────────────────────────────────────────
  // Navigation Methods
  // ─────────────────────────────────────────────────────────────

  protected next(): void {
    if (this.currentIndex() < this.maxIndex()) {
      this.currentIndex.update((v) => v + 1);
    }
  }

  protected previous(): void {
    if (this.currentIndex() > 0) {
      this.currentIndex.update((v) => v - 1);
    }
  }

  protected goToSlide(index: number): void {
    if (index >= 0 && index <= this.maxIndex()) {
      this.currentIndex.set(index);
    }
  }

  protected handleCarouselAction(direction: ECarouselDirection): void {
    if (direction === ECarouselDirection.Next) {
      this.next();
    } else {
      this.previous();
    }
  }

  // ─────────────────────────────────────────────────────────────
  // Effects
  // ─────────────────────────────────────────────────────────────

  private setupAutoCorrectEffect(): void {
    effect(() => {
      const maxIdx = this.maxIndex();
      if (this.currentIndex() > maxIdx) {
        this.currentIndex.set(maxIdx);
      }
    });
  }

  // ─────────────────────────────────────────────────────────────
  // Cleanup
  // ─────────────────────────────────────────────────────────────

  private setupCleanup(): void {
    this.destroyRef.onDestroy(() => {
      if (this.resizeTimeoutId !== null) {
        clearTimeout(this.resizeTimeoutId);
        this.resizeTimeoutId = null;
      }
    });
  }

  // ─────────────────────────────────────────────────────────────
  // Measurement
  // ─────────────────────────────────────────────────────────────

  private measure(): void {
    const viewport = this.viewport.nativeElement;
    const track = viewport.querySelector('.instructors__track') as HTMLElement;

    if (!track) return;

    const cards = track.querySelectorAll<HTMLElement>('.card');

    if (!cards.length) return;

    this.viewportWidth.set(viewport.clientWidth);

    if (cards.length > 1) {
      const first = cards[0].getBoundingClientRect();
      const second = cards[1].getBoundingClientRect();
      this.cardWidth.set(second.left - first.left);
    } else {
      this.cardWidth.set(cards[0].getBoundingClientRect().width);
    }

    const firstCardWidth = cards[0].getBoundingClientRect().width;
    const visible = Math.max(
      1,
      Math.round(
        (viewport.clientWidth + this.gap()) /
        (firstCardWidth + this.gap())
      )
    );

    this.visibleCards.set(visible);

    if (this.currentIndex() > this.maxIndex()) {
      this.currentIndex.set(this.maxIndex());
    }
  }

  // ─────────────────────────────────────────────────────────────
  // Helpers
  // ─────────────────────────────────────────────────────────────

  private getCardsPerView(width: number): number {
    const breakpoint = this.BREAKPOINTS_CONFIG.find(
      (bp: IBreakpoint) => width <= bp.maxWidth
    );

    return breakpoint?.cardsPerView ?? 1;
  }

  private debounce(fn: () => void, delay: number): void {
    if (this.resizeTimeoutId !== null) {
      clearTimeout(this.resizeTimeoutId);
    }

    this.resizeTimeoutId = setTimeout(() => {
      fn();
      this.resizeTimeoutId = null;
    }, delay);
  }
}
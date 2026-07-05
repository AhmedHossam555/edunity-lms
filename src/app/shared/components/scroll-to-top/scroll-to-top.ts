import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  DOCUMENT,
  computed,
  inject,
  input,
  signal,
  effect,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CSS_CLASSES, DEFAULT_CONFIG, SCROLL_TOP_ICON, SIZE_PX_MAP } from '@app/shared/constants';
import { EScrollToTopState, EScrollBehavior } from '@app/shared/enums';
import { IScrollToTopConfig, IScrollToTopResolvedConfig, IScrollToTopState, IScrollToTopIcon } from '@app/shared/interfaces';



/**
 * Floating "scroll to top" button component.
 * 
 * @description
 * - Appears once the page has been scrolled past a configurable threshold.
 * - Fully keyboard operable (native <button>) and announced via aria-live region.
 * - Respects prefers-reduced-motion by falling back to an instant jump.
 * - Uses Angular 21 signals for reactive state management.
 * - All visual knobs (size, offset, radius, color, shadow, z-index, transition
 *   duration) live in `IScrollToTopConfig` and flow into CSS custom properties
 *   via host bindings, so the SCSS never needs hardcoded values.
 * 
 * @example
 * ```html
 * <app-scroll-to-top 
 *   [config]="{ position: 'bottom-left', variant: 'outlined' }"
 * />
 * ```
 */
@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  templateUrl: './scroll-to-top.html',
  styleUrl: './scroll-to-top.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: CSS_CLASSES.host,
    '[style.--scroll-to-top-size]': 'sizePx()',
    '[style.--scroll-to-top-offset]': 'resolvedConfig().offset',
    '[style.--scroll-to-top-radius]': 'resolvedConfig().radius',
    '[style.--scroll-to-top-color-fg]': 'resolvedConfig().colorFg',
    '[style.--scroll-to-top-shadow]': 'resolvedConfig().shadow',
    '[style.--scroll-to-top-transition-duration]': 'resolvedConfig().transitionDuration',
    '[style.--scroll-to-top-z-index]': 'resolvedConfig().zIndex',
  },
})
export class ScrollToTop {
  // =========================================================================
  // Inputs
  // =========================================================================

  /** Optional partial configuration; merged over sensible defaults */
  public readonly config = input<IScrollToTopConfig>({});

  // =========================================================================
  // Computed Signals
  // =========================================================================

  /** Resolved (non-optional) config derived from the input + defaults */
  protected readonly resolvedConfig = computed<IScrollToTopResolvedConfig>(() => {
    const inputConfig = this.config();
    return {
      visibilityThresholdPx: inputConfig.visibilityThresholdPx ?? DEFAULT_CONFIG.visibilityThresholdPx,
      scrollBehavior: inputConfig.scrollBehavior ?? DEFAULT_CONFIG.scrollBehavior,
      position: inputConfig.position ?? DEFAULT_CONFIG.position,
      variant: inputConfig.variant ?? DEFAULT_CONFIG.variant,
      ariaLabel: inputConfig.ariaLabel ?? DEFAULT_CONFIG.ariaLabel,
      size: inputConfig.size ?? DEFAULT_CONFIG.size,
      offset: inputConfig.offset ?? DEFAULT_CONFIG.offset,
      radius: inputConfig.radius ?? DEFAULT_CONFIG.radius,
      colorFg: inputConfig.colorFg ?? DEFAULT_CONFIG.colorFg,
      shadow: inputConfig.shadow ?? DEFAULT_CONFIG.shadow,
      transitionDuration: inputConfig.transitionDuration ?? DEFAULT_CONFIG.transitionDuration,
      zIndex: inputConfig.zIndex ?? DEFAULT_CONFIG.zIndex,
    };
  });

  /** BEM modifier class derived from the configured position */
  protected readonly positionClass = computed<string>(
    () => `${CSS_CLASSES.button}--${this.resolvedConfig().position}`
  );

  /** BEM modifier class derived from the configured variant */
  protected readonly variantClass = computed<string>(
    () => `${CSS_CLASSES.button}--${this.resolvedConfig().variant}`
  );

  /** Concrete CSS length for the button's --scroll-to-top-size variable */
  protected readonly sizePx = computed<string>(
    () => SIZE_PX_MAP[this.resolvedConfig().size]
  );

  /** Combined CSS classes for the button */
  protected readonly buttonClasses = computed<string>(() => {
    const classes = [
      CSS_CLASSES.button,
      this.positionClass(),
      this.variantClass(),
    ];

    if (this.isVisible()) {
      classes.push(`${CSS_CLASSES.button}--${EScrollToTopState.Visible}`);
    }

    const currentState = this.state();
    if (currentState.isHovered) {
      classes.push(`${CSS_CLASSES.button}--${EScrollToTopState.Hovered}`);
    }

    if (currentState.isFocused) {
      classes.push(`${CSS_CLASSES.button}--${EScrollToTopState.Focused}`);
    }

    if (currentState.isActive) {
      classes.push(`${CSS_CLASSES.button}--${EScrollToTopState.Active}`);
    }

    return classes.join(' ');
  });

  // =========================================================================
  // Signals
  // =========================================================================

  /** Whether the button should currently be rendered/visible */
  protected readonly isVisible = signal<boolean>(false);

  /** Internal state for hover, focus, and active states */
  protected readonly state = signal<IScrollToTopState>({
    isVisible: false,
    isHovered: false,
    isFocused: false,
    isActive: false,
  });

  /** Icon definition rendered inside the button */
  protected readonly icon: IScrollToTopIcon = SCROLL_TOP_ICON;


  // =========================================================================
  // Dependencies
  // =========================================================================

  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly domSanitizer = inject(DomSanitizer);
  private readonly window: (Window & typeof globalThis) | null = this.document.defaultView;


  // =========================================================================
  // Lifecycle
  // =========================================================================

  public constructor() {
    this.registerScrollListener();
    this.registerEffects();
  }

  // =========================================================================
  // Public Methods
  // =========================================================================

  /**
   * Scrolls the document back to the top, honoring the configured
   * scroll behavior unless the user prefers reduced motion.
   */
  protected scrollToTop(): void {
    const behavior = this.prefersReducedMotion() 
      ? EScrollBehavior.Auto 
      : this.resolvedConfig().scrollBehavior;

    this.window?.scrollTo({ top: 0, left: 0, behavior });

    // Move focus to the top of the document for keyboard/screen-reader users
    this.focusDocumentTop();
  }

  /** Handle mouse enter event */
  protected onMouseEnter(): void {
    this.state.update(state => ({ ...state, isHovered: true }));
  }

  /** Handle mouse leave event */
  protected onMouseLeave(): void {
    this.state.update(state => ({ ...state, isHovered: false }));
  }

  /** Handle focus event */
  protected onFocus(): void {
    this.state.update(state => ({ ...state, isFocused: true }));
  }

  /** Handle blur event */
  protected onBlur(): void {
    this.state.update(state => ({ ...state, isFocused: false }));
  }

  /** Handle mouse down event */
  protected onMouseDown(): void {
    this.state.update(state => ({ ...state, isActive: true }));
  }

  /** Handle mouse up event */
  protected onMouseUp(): void {
    this.state.update(state => ({ ...state, isActive: false }));
  }

  // =========================================================================
  // Private Methods
  // =========================================================================

  /**
   * Register scroll listener to track page scroll position
   */
  private registerScrollListener(): void {
    if (!this.window) {
      return;
    }

    const handleScroll = (): void => {
      const scrolledPx = this.window?.scrollY ?? 0;
      const threshold = this.resolvedConfig().visibilityThresholdPx;
      const visible = scrolledPx > threshold;
      
      this.isVisible.set(visible);
      this.state.update(state => ({ ...state, isVisible: visible }));
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    this.window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup on destroy
    this.destroyRef.onDestroy(() => {
      this.window?.removeEventListener('scroll', handleScroll);
    });
  }

  /**
   * Register effects for reactive side effects
   */
  private registerEffects(): void {
    // Log configuration changes in development
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      effect(() => {
        const config = this.resolvedConfig();
        console.debug('[ScrollToTop] Configuration updated:', config);
      });
    }

    // Update document body attribute for visibility
    effect(() => {
      const visible = this.isVisible();
      if (visible) {
        this.document.body.setAttribute('data-scroll-to-top-visible', '');
      } else {
        this.document.body.removeAttribute('data-scroll-to-top-visible');
      }
    });
  }

  /**
   * Check if user prefers reduced motion
   */
  private prefersReducedMotion(): boolean {
    return this.window?.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  }

  /**
   * Focus the top of the document for accessibility
   */
  private focusDocumentTop(): void {
    try {
      this.document.body.setAttribute('tabindex', '-1');
      this.document.body.focus({ preventScroll: true });
    } finally {
      this.document.body.removeAttribute('tabindex');
    }
  }
}
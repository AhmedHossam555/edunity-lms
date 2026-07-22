export interface ICourseSearchConfig {
  readonly placeholder: string;
  readonly ariaLabel: string;
  readonly debounceTime: number;
  readonly ariaLabelClear: string;
}

export interface ICourseSearchIcon {
  readonly viewBox: string;
  readonly strokeWidth: number;
  readonly strokeLinecap: 'round' | 'butt' | 'square';
  readonly strokeLinejoin: 'round' | 'miter' | 'bevel';
  readonly paths: readonly string[];
  readonly width: number;
  readonly height: number;
}

export interface ICourseSearchIcons {
  readonly search: ICourseSearchIcon;
  readonly clear: ICourseSearchIcon;
}
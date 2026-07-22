import { SearchPlaceholder, SearchAriaLabel } from "../enums";
import { ICourseSearchConfig } from "../interfaces";

export const COURSE_SEARCH_CONFIG: ICourseSearchConfig = {
  placeholder: SearchPlaceholder.Courses,
  ariaLabel: SearchAriaLabel.Search,
  ariaLabelClear: SearchAriaLabel.Clear,
  debounceTime: 300,
} as const;
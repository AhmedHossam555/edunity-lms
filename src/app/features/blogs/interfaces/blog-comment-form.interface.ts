import { FormFieldAutocomplete, FormFieldId, FormFieldType } from "../enums";

/**
 * Static, presentational description of a single form field.
 * Drives label / placeholder / input attributes in the template.
 */
export interface IFormFieldConfig {
  id: FormFieldId;
  label: string;
  placeholder: string;
  type: FormFieldType;
  autocomplete?: FormFieldAutocomplete;
  fullWidth?: boolean;
  errorId: string;
  helpId?: string;
}

/**
 * Validation error copy for a single field.
 * Keys correspond to Angular validator error keys.
 */
export interface IFormFieldErrorMessages {
  required?: string;
  minlength?: string;
  maxlength?: string;
  email?: string;
}

/**
 * Full static configuration for the comment form
 * (header copy, fields, submit button copy).
 */
export interface ICommentFormConfig {
  title: string;
  description: string;
  submitLabel: string;
  submitLoadingLabel: string;
  maxMessageLength: number;
  fields: IFormFieldConfig[];
}

/**
 * Shape of the raw form value, matches commentForm.getRawValue().
 */
export interface ICommentFormValue {
  name: string;
  email: string;
  website: string;
  message: string;
}
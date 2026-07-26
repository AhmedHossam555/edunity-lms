/**
 * Identifiers for every form control in the blog comment form.
 * Mirrors formControlName / id values used in the template.
 */
export enum FormFieldId {
  Name = 'name',
  Email = 'email',
  Website = 'website',
  Message = 'message',
}

/**
 * Native input types used across the form fields.
 */
export enum FormFieldType {
  Text = 'text',
  Email = 'email',
  Url = 'url',
  Textarea = 'textarea',
}

/**
 * autocomplete attribute values used across the form fields.
 */
export enum FormFieldAutocomplete {
  Name = 'name',
  Email = 'email',
  Url = 'url',
}
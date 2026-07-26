import { FormFieldId, FormFieldType, FormFieldAutocomplete } from "../enums";
import { ICommentFormConfig, IFormFieldErrorMessages, IFormFieldConfig } from "../interfaces";

export const MAX_MESSAGE_LENGTH = 500;

/**
 * All static, non-behavioral content that was previously hardcoded
 * in blog-comment-form.html (header text, placeholders, submit copy).
 */
export const COMMENT_FORM_CONFIG: ICommentFormConfig = {
  title: "Let's Get in Touch",
  description: 'Your email address will not be published. Required fields are marked',
  submitLabel: 'Send Message',
  submitLoadingLabel: 'Sending...',
  maxMessageLength: MAX_MESSAGE_LENGTH,
  fields: [
    {
      id: FormFieldId.Name,
      label: 'Your Name',
      placeholder: 'Your Name *',
      type: FormFieldType.Text,
      autocomplete: FormFieldAutocomplete.Name,
      errorId: 'name-error',
    },
    {
      id: FormFieldId.Email,
      label: 'Email Address',
      placeholder: 'Email Address *',
      type: FormFieldType.Email,
      autocomplete: FormFieldAutocomplete.Email,
      errorId: 'email-error',
    },
    {
      id: FormFieldId.Website,
      label: 'Website',
      placeholder: 'Website',
      type: FormFieldType.Url,
      autocomplete: FormFieldAutocomplete.Url,
      fullWidth: true,
      errorId: 'website-error',
    },
    {
      id: FormFieldId.Message,
      label: 'Message',
      placeholder: 'Write your message...',
      type: FormFieldType.Textarea,
      fullWidth: true,
      errorId: 'message-error',
      helpId: 'message-help',
    },
  ],
};

/**
 * Validation copy per field, matching the strings that were inline
 * in the @if/@else-if blocks of the original template.
 */
export const COMMENT_FORM_ERROR_MESSAGES: Record<FormFieldId, IFormFieldErrorMessages> = {
  [FormFieldId.Name]: {
    required: 'Name is required.',
    minlength: 'Name must be at least 2 characters.',
  },
  [FormFieldId.Email]: {
    required: 'Email address is required.',
    email: 'Please enter a valid email address.',
  },
  [FormFieldId.Website]: {},
  [FormFieldId.Message]: {
    required: 'Message is required.',
    minlength: 'Message must be at least 20 characters.',
    maxlength: `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.`,
  },
};

/** Convenience lookup so the component/template can fetch a field config by id. */
export function getFieldConfig(id: FormFieldId): IFormFieldConfig {
  const field = COMMENT_FORM_CONFIG.fields.find((f) => f.id === id);
  if (!field) {
    throw new Error(`No field config found for id "${id}"`);
  }
  return field;
}
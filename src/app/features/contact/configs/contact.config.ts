import { IContactInfo, IFieldValidationRules, IFormFieldConfig, ISocialLink, IValidationErrorMessages } from '../interfaces';

export const CONTACT_CONFIG: IContactInfo = {
  address: '1501 Vine St, Hudson, WI 54016, USA',
  phone: '+1 (715) 377-3800',
  email: 'contact@edunity.com',
};

export const SOCIAL_LINKS: ISocialLink[] = [
  { icon: 'facebook', url: 'https://facebook.com', label: 'Facebook' },
  { icon: 'twitter', url: 'https://twitter.com', label: 'Twitter' },
  { icon: 'instagram', url: 'https://instagram.com', label: 'Instagram' },
  { icon: 'pinterest', url: 'https://pinterest.com', label: 'Pinterest' },
];

/** Configuration for text input fields rendered by the contact form */
export const CONTACT_FORM_FIELDS: Record<
  'name' | 'email' | 'subject',
  IFormFieldConfig
> = {
  name: {
    id: 'name-input',
    controlName: 'name',
    label: 'Name',
    placeholder: 'Enter your full name',
    autocomplete: 'name',
    maxLength: 100,
  },
  email: {
    id: 'email-input',
    controlName: 'email',
    label: 'Email',
    placeholder: 'Enter your email address',
    autocomplete: 'email',
    maxLength: 254,
    type: 'email',
    inputMode: 'email',
  },
  subject: {
    id: 'subject-input',
    controlName: 'subject',
    label: 'Subject',
    placeholder: 'Brief subject line',
    autocomplete: 'off',
    maxLength: 150,
  },
};

/** Configuration for the message textarea */
export const MESSAGE_FIELD_CONFIG = {
  id: 'message-input',
  controlName: 'message' as const,
  label: 'Message',
  placeholder: 'Write your message here...',
  maxLength: 1000,
  rows: 5,
};

/** Validation constraints for each form field */
export const CONTACT_FORM_VALIDATION_RULES: Record<
  'name' | 'email' | 'subject' | 'message',
  IFieldValidationRules
> = {
  name: { minLength: 3, maxLength: 100 },
  email: { maxLength: 254 },
  subject: { minLength: 5, maxLength: 150 },
  message: { minLength: 10, maxLength: 1000 },
};

/** Shared validation messages */
export const VALIDATION_ERROR_MESSAGES: IValidationErrorMessages = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  pattern: 'Please enter a valid value',
  minlengthPrefix: 'Minimum ',
  minlengthSuffix: ' characters required',
  maxlengthPrefix: 'Maximum ',
  maxlengthSuffix: ' characters allowed',
};

/** Allowed characters for the name field */
export const CONTACT_FORM_NAME_PATTERN = /^[a-zA-Z\s'-]+$/;

/** Local storage key used to persist the contact form draft */
export const CONTACT_FORM_STORAGE_KEY = 'contactFormDraft';

/** Simulated API response delay (milliseconds) */
export const CONTACT_FORM_SUBMIT_DELAY_MS = 1500;

/** Character count threshold for displaying the near-limit warning */
export const CONTACT_FORM_COUNTER_NEAR_LIMIT = 900;

/** Maximum number of characters allowed in the message field */
export const CONTACT_FORM_MESSAGE_MAX_LENGTH = 1000;
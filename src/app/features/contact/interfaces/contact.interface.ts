export interface IContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface IContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface ISocialLink {
  icon: string;
  url: string;
  label: string;
}

export interface IContactIcons {
  address: string;
  phone: string;
  email: string;
}

/** Metadata describing a single text/email input field */
export interface IFormFieldConfig {
  id: string;
  controlName: keyof IContactFormData;
  label: string;
  placeholder: string;
  autocomplete: string;
  maxLength: number;
  type?: string;
  inputMode?: string;
}

/** Static validation error messages */
export interface IValidationErrorMessages {
  required: string;
  email: string;
  pattern: string;
  minlengthPrefix: string;
  minlengthSuffix: string;
  maxlengthPrefix: string;
  maxlengthSuffix: string;
}

/** Validation rules for each form field */
export interface IFieldValidationRules {
  minLength?: number;
  maxLength: number;
}

export interface IContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface ISocialLink {
  icon: string; // FontAwesome class or SVG path
  url: string;
  label: string;
}


export interface IContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

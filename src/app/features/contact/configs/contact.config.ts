import { IContactInfo, ISocialLink } from '../interfaces/contact.interface';

export const CONTACT_CONFIG: IContactInfo = {
  address: '1501 Vine St, Hudson, WI 54016, USA',
  phone: '+1 (715) 377-3800',
  email: 'contact@edunity.com',
};

export const SOCIAL_LINKS: ISocialLink[] = [
  { icon: 'fa-brands fa-facebook-f', url: 'https://facebook.com', label: 'Facebook' },
  { icon: 'fa-brands fa-twitter', url: 'https://twitter.com', label: 'Twitter' },
  { icon: 'fa-brands fa-instagram', url: 'https://instagram.com', label: 'Instagram' },
  { icon: 'fa-brands fa-linkedin-in', url: 'https://linkedin.com', label: 'LinkedIn' },
];

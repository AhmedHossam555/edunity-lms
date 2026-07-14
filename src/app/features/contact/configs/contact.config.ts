import { IContactInfo, ISocialLink } from '../interfaces/contact.interface';

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

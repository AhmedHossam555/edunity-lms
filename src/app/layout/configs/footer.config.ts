export interface FooterLink {
  label: string;
  url: string;
}

export interface SocialLink {
  platform: string;
  icon: string;
  url: string;
}

export interface FooterConfig {
  address: string;
  phone: string;
  email: string;
  description: string;
  services: FooterLink[];
  socials: SocialLink[];
}

export const FOOTER_CONFIG: FooterConfig = {
  address: '1925 Boggess Street',
  phone: '(00) 875 784 568',
  email: 'info@gmail.com',
  description: 'Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt tortor aliqua mfacilisi cras fermentum odio eu.',
  services: [
    { label: 'Web Development', url: '/services/web-dev' },
    { label: 'UI/UX Design', url: '/services/ui-ux' },
    { label: 'Management', url: '/services/management' },
    { label: 'Digital Marketing', url: '/services/marketing' },
    { label: 'Blog News', url: '/blog' }
  ],
  socials: [
    { platform: 'facebook', icon: 'social-facebook', url: '#' },
    { platform: 'instagram', icon: 'social-instagram', url: '#' },
    { platform: 'pinterest', icon: 'social-pinterest', url: '#' },
    { platform: 'twitter', icon: 'social-twitter', url: '#' }
  ]
};
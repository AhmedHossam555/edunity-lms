// ─────────────────────────────────────────────────────────────
// Footer Content
// ─────────────────────────────────────────────────────────────

import { SocialPlatform } from "../enums";
import { IFooterConfig, IFooterI18n } from "../interfaces";

export const FOOTER_CONFIG: IFooterConfig = {
  contact: {
    items: [
      {
        label: 'Address',
        value: '1925 Boggess Street',
        type: 'address',
      },
      {
        label: 'Phone',
        value: '(00) 875 784 568',
        type: 'phone',
      },
      {
        label: 'Email',
        value: 'info@gmail.com',
        type: 'email',
      },
    ],
  },

  description:
    'Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.',

  services: [
    {
      label: 'Web Development',
      url: '/services/web-development',
    },
    {
      label: 'UI/UX Design',
      url: '/services/ui-ux-design',
    },
    {
      label: 'Management',
      url: '/services/management',
    },
    {
      label: 'Digital Marketing',
      url: '/services/digital-marketing',
    },
    {
      label: 'Blog News',
      url: '/blog',
    },
  ],

  socials: [
    {
      platform: SocialPlatform.Facebook,
      url: '#',
      ariaLabel: 'Facebook',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="#fc6441" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
</svg>
`,
    },
    {
      platform: SocialPlatform.Instagram,
      url: '#',
      ariaLabel: 'Instagram',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<g fill="none" fill-rule="evenodd">
		<path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
		<path fill="#fc6441" d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm0 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m-4 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m4.5-3.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2" />
	</g>
</svg>
`,
    },
    {
      platform: SocialPlatform.Pinterest,
      url: '#',
      ariaLabel: 'Pinterest',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
	<path d="M0 0h20v20H0z" fill="none" />
	<path fill="#fc6441" d="M10.2 2C5.8 2 3.5 4.8 3.5 7.9c0 1.5.8 3 2.1 3.8c.4.2.3 0 .6-1.2c0-.1 0-.2-.1-.3C4.3 8 5.8 3.7 10 3.7c6.1 0 4.9 8.4 1.1 8.4c-.8.1-1.5-.5-1.5-1.3v-.4c.4-1.1.7-2.1.8-3.2c0-2.1-3.1-1.8-3.1 1c0 .5.1 1 .3 1.4c0 0-1 4.1-1.2 4.8c-.2 1.2-.1 2.4.1 3.5c-.1.1 0 .1 0 .1h.1c.7-1 1.3-2 1.7-3.1c.1-.5.6-2.3.6-2.3c.5.7 1.4 1.1 2.3 1.1c3.1 0 5.3-2.7 5.3-6S13.7 2 10.2 2" />
</svg>
`,
    },
    {
      platform: SocialPlatform.Twitter,
      url: '#',
      ariaLabel: 'Twitter',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 14 14">
	<path d="M0 0h14v14H0z" fill="none" />
	<g fill="none">
		<g clip-path="url(#SVGG1Ot4cAD)">
			<path fill="#fc6441" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z" />
		</g>
		<defs>
			<clipPath id="SVGG1Ot4cAD">
				<path fill="#fff" d="M0 0h14v14H0z" />
			</clipPath>
		</defs>
	</g>
</svg>
`,
    },
  ],

  gallery: [
    {
      image: 'gallery-academic-consultation',
      alt: 'Academic consultation',
    },
    {
      image: 'gallery-campus-life',
      alt: 'Campus life',
    },
    {
      image: 'gallery-group-study-session',
      alt: 'Study session',
    },
    {
      image: 'gallery-independent-research',
      alt: 'Research',
    },
    {
      image: 'gallery-online-learning',
      alt: 'Online learning',
    },
    {
      image: 'gallery-student-collaboration',
      alt: 'Student collaboration',
    },
  ],

  logo: {
    src: '/assets/images/logos/white/edunity-logo-orange/edunity-logo-orange.svg',
    alt: 'Edunity',
    width: 237,
    height: 54,
  },

  copyrightYear: new Date().getFullYear(),
};

export const FOOTER_I18N: IFooterI18n = {
  servicesTitle: 'Our Services',
  galleryTitle: 'Gallery',
  subscribeTitle: 'Subscribe',
  subscribePlaceholder: 'Enter your email',
  subscribeButton: 'SUBSCRIBE NOW',
  copyright: 'All Rights Reserved',
  addressLabel: 'Address',
  phoneLabel: 'Phone',
  emailLabel: 'Email',
  brandName: 'Edunity',
};

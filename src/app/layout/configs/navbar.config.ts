import { ROUTE_PATHS } from '@app/core/routing/domain';
import { NavLinkId } from '../enums';

export const NAVBAR = {
  links: [
    { id: NavLinkId.Home, label: 'Home', href: ROUTE_PATHS.HOME, active: true },
    { id: NavLinkId.AboutUs, label: 'About Us', href: ROUTE_PATHS.ABOUT },
    { id: NavLinkId.Courses, label: 'Courses', href: ROUTE_PATHS.COURSES },
    { id: NavLinkId.Pages, label: 'Pages', href: '#' },
    { id: NavLinkId.Blogs, label: 'Blogs', href: ROUTE_PATHS.BLOGS },
    { id: NavLinkId.Contact, label: 'Contact Us', href: ROUTE_PATHS.CONTACT },
  ],

  contactButton: {
    label: 'Contact Us',
    href: '#',
  },
};
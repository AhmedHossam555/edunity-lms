import { IContactButton, ILoginLink, INavLink, ISocialLink } from "./header.interfaces";



/** One contact-info row (phone / email / location) in the mobile info block. */
export interface IInfoItem {
  id: string;
  iconKey: string;
  label: string;
}




/** Everything that used to live in the (mobile) top bar. */
export interface ITopBar {
  infoItems: IInfoItem[];
  loginLink: ILoginLink;
  socials: ISocialLink[];
}



/** Navigation menu configuration. */
export interface INavbar {
  links: INavLink[];
  contactButton: IContactButton;
}


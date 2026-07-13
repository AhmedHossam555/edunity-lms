import { Component } from '@angular/core';
import { CONTACT_CONFIG, SOCIAL_LINKS } from '../../configs';

@Component({
  selector: 'app-contact-info',
  imports: [],
  templateUrl: './contact-info.html',
  styleUrl: './contact-info.scss',
})
export class ContactInfo {
  config = CONTACT_CONFIG;
  socials = SOCIAL_LINKS;
}

import { Component } from '@angular/core';
import { ContactForm, ContactInfo, ContactMap } from "../../components";
import { CONTACT_CONFIG } from '../../configs';
import { PageBanner } from "@app/shared";

@Component({
  selector: 'app-contact-page',
  imports: [ContactForm, ContactInfo, ContactMap, PageBanner],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage {
  mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(CONTACT_CONFIG.address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
}

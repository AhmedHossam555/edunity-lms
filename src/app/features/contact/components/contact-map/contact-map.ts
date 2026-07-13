import { isPlatformBrowser } from '@angular/common';
import { Component, inject, Input, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-map',
  imports: [],
  templateUrl: './contact-map.html',
  styleUrl: './contact-map.scss',
})
export class ContactMap {
 @Input({ required: true }) src!: string;

  safeUrl!: SafeResourceUrl;

  private sanitizer = inject(DomSanitizer);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['src']?.currentValue) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
    }
  }
}

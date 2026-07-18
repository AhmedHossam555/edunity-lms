// truncate-text.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText',
  standalone: true,
})
export class TruncateTextPipe implements PipeTransform {
  transform(value: string, limit = 100): string {
    if (!value || value.length <= limit) return value;
    return value.slice(0, limit) + '...';
  }
}
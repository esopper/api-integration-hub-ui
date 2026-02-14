import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixDate'
})
export class UnixDatePipe implements PipeTransform {

  transform(value: number, format: Intl.DateTimeFormatOptions = { weekday: "short", month: 'short', day: 'numeric' }): string {
    if (!value) return '';
    
    // Handle both seconds and milliseconds
    const timestamp = value < 1e12 ? value * 1000 : value;
    return new Date(timestamp).toLocaleDateString('en-US', format);
  }

}

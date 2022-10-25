import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
constructor(private santizer:DomSanitizer){}
  transform(value: string, email: string): any {
    // return "Email : "+ email;
    return this.santizer.bypassSecurityTrustHtml('<div style="background-color:#ffffcc">'+ email +'</div>');
  }

}

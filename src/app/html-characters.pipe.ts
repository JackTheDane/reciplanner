import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlCharacters'
})
export class HtmlCharactersPipe implements PipeTransform {

  transform(string: string): string {
    let tempString = string;
    tempString = tempString.replace('&amp;', '&');
    tempString = tempString.replace('&#174', '®');
    tempString = tempString.replace('&#169', '©');
    tempString = tempString.replace('&#8217;', '\'');
    return tempString;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlCharacters'
})


export class HtmlCharactersPipe implements PipeTransform {
  private htmlCharCodes: { code: string; character: string; }[] = [
    {
      code: '&amp;',
      character: '&'
    },
    {
      code: '&#174;',
      character: '®'
    },
    {
      code: '&#169;',
      character: '©'
    },
    {
      code: '&#8217;',
      character: '\''
    }
  ];

  public transform(string: string): string {
    let tempString = string;

    this.htmlCharCodes.forEach(
      (charCode) => {
        // Replace all occurences of the characters in the strings
        tempString = tempString.replace(new RegExp(charCode.code, 'g'), charCode.character);
      }
    );
    
    return tempString;
  }
}

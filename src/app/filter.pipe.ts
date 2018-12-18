import { Pipe, PipeTransform } from '@angular/core';
import { BasicRecipe } from './types/recipe-basic';

@Pipe({
  name: 'filterByString',
})

export class FilterPipe implements PipeTransform {

  transform( recipes: BasicRecipe[], query: string ): BasicRecipe[] {
    const filtered = recipes.filter( rec => rec.title.toLowerCase().includes(query.toLowerCase()) );
    console.log('Reg ', recipes);
    console.log('Filtered ', filtered);
    return filtered;
  }
 
}

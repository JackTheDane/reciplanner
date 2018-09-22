import { BasicRecipe } from './recipe-basic';

export class FullRecipe extends BasicRecipe {
  source_url: string;
  publisher: string;
  publisher_url: string;
  ingredients: Array<string>;
}

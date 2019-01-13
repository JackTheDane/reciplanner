import { FullRecipe } from './FullRecipe';

export interface IRecipeApiResponse {
  count: number;
  recipes: FullRecipe[];
}

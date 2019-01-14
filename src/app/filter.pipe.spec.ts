import { FilterPipe } from './filter.pipe';
import { BasicRecipe } from './types/BasicRecipe';

describe('FilterPipe', () => {
  
  let pipe;
  const recipes: BasicRecipe[] = [
    {
      publisher: 'pub',
      title: 'name-AS',
      source_url: '',
      recipe_id: '',
      image_url: '',
      social_rank: 100,
      publisher_url: ''
    },
    {
      publisher: 'pub',
      title: 'name-asdf',
      source_url: '',
      recipe_id: '',
      image_url: '',
      social_rank: 100,
      publisher_url: ''
    },
    {
      publisher: 'pub',
      title: 'name-asdfgh',
      source_url: '',
      recipe_id: '',
      image_url: '',
      social_rank: 100,
      publisher_url: ''
    }
  ];

  const filteredRecipes: BasicRecipe[] = recipes.slice(1);

  beforeEach( () => {
    pipe = new FilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should do nothing, if passed empty string', () => {
    console.log( recipes );
    console.log( pipe.transform(recipes, '') );
    expect( pipe.transform(recipes, '') ).toEqual(recipes);
  });

  it('should filter recipes, based on titles and query', () => {
    expect(pipe.transform(recipes, 'asdf')).toEqual(filteredRecipes);
  }); 

  it('should be case insensitive when searching', () => {
    expect(pipe.transform(recipes, 'AsDF')).toEqual(filteredRecipes);
  });

  it('should be case insensitive in regards to title too', () => {
    expect(pipe.transform(recipes, 'as')).toEqual(recipes);
  });

});

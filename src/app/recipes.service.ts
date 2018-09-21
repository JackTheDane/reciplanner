import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {

  constructor(private http: HttpClient) { }

  getRecipesByQuery(query: string = '') {
    const url = `http://mbpmedia.com/_api_rp/s?q=${ query }`;
    // const url = '../assets/testJSON/recipes.json'; // Temp, local JSON file to reduce API calls

    return this.http.get(url);
  }

  getRecipeByid(id: string = '' ) {
    const url = `http://mbpmedia.com/_api_rp/g?rId=${ id }`;
    // const url = '../assets/testJSON/recipe.json'; // Temp, local JSON file to reduce API calls

    return this.http.get(url);
  }
}

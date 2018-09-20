import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// TODO: Fix all the things

@Injectable({
  providedIn: 'root'
})

export class RecipesService {

  constructor(private http: HttpClient) { }

  getRecipesByQuery(query: string = '') {
    // const url = `https://api.edamam.com/search?q=${query}&app_id=c08ebda8&app_key=9b322bd579bbe67417bb5c38dc0872a8`;
    const url = '../assets/testJSON/recipes.json'; // Temp, local JSON file to reduce API calls

    return this.http.get(url);
  }

  getRecipeByid(id: string = '' ) {
    // const url = `https://api.edamam.com/search?r=${id}&app_id=c08ebda8&app_key=9b322bd579bbe67417bb5c38dc0872a8`;
    const url = '../assets/testJSON/recipe.json'; // Temp, local JSON file to reduce API calls

    return this.http.get(url);
  }
}

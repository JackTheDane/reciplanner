import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getRecipesByQuery(query = ''){
    let url = `https://api.edamam.com/search?q=${query}&app_id=c08ebda8&app_key=9b322bd579bbe67417bb5c38dc0872a8`;

    return this.http.get(url);
  }

  getRecipeByid(id = ''){
    let url = `https://api.edamam.com/search?r=${id}&app_id=c08ebda8&app_key=9b322bd579bbe67417bb5c38dc0872a8`;

    return this.http.get(url);
  }
}

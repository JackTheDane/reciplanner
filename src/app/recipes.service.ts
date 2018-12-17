import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { coreApiUrl } from './config';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {

  constructor(private http: HttpClient) { }

  getRecipesByQuery(query: string = '', page: number = 1) {
    let url = coreApiUrl + '/s?q=' + query;

    if (page > 1) {
      url += ('&page=' + page);
    }

    return this.http.get(url);
  }

  getRecipeById(id: string = '' ) {
    const url = coreApiUrl + '/g?rId=' + id;

    return this.http.get(url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { coreApiUrl } from './config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {

  constructor(
    private http: HttpClient,
  ) {}

  getRecipesByQuery(query: string = '', page: number = 1): Observable<Object> {
    const url = coreApiUrl + '/s?q=' + this.getCombinedQuery(query, page);
    return this.http.get(url);
  }

  getCombinedQuery(query: string = '', page: number = 1): string {
    let url = query;
            
    if (page > 1) {
      url += ('&page=' + page);
    }

    return url;
  }

  getRecipeById(id: string = '', recipeOnly: boolean = false) {
    const url = coreApiUrl + '/g?rId=' + id;

    return this.http.get(url);
  }
}

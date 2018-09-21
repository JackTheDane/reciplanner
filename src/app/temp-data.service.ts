import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {

  Recipes: Recipe[] = [{
    title: 'Test recipe',
    id: 'abcd123',
    img: 'http://static.food2fork.com/Bacon2BWrapped2BJalapeno2BPopper2BStuffed2BChicken2B5002B5909939b0e65.jpg',
    rating: 100.0
  }];

  constructor() { }
}

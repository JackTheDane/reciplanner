import { Component, OnInit } from '@angular/core';

export interface FullRecipe {
  title: string;
  id: string;
  img: string;
  source_url: string;
  publisher: string;
  publisher_url: string;
  ranking: number;
  ingredients: Array<string>;
}

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

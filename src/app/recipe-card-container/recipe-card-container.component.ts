import { Component, OnInit, Input } from '@angular/core';

import { BasicRecipe } from '../recipe-basic';

@Component({
  selector: 'app-recipe-card-container',
  templateUrl: './recipe-card-container.component.html',
  styleUrls: ['./recipe-card-container.component.scss']
})

export class RecipeCardContainerComponent implements OnInit {

  @Input()
  recipes$: Array<BasicRecipe>;

  @Input()
  numberOfResponses: number;
  
  @Input()
  isLoading: boolean;

  constructor() {}

  ngOnInit() {
  }

}

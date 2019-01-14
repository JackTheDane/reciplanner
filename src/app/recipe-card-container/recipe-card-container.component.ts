import { Component, OnInit, Input } from '@angular/core';

import { BasicRecipe } from '../types/BasicRecipe';

@Component({
  selector: 'app-recipe-card-container',
  templateUrl: './recipe-card-container.component.html',
  styleUrls: ['./recipe-card-container.component.scss']
})

export class RecipeCardContainerComponent implements OnInit {

  @Input()
  recipes$: Array<BasicRecipe>;
  
  @Input()
  isLoading: boolean;

  constructor() {}

  ngOnInit() {
  }

}

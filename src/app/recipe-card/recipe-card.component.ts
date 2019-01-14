import { Component, OnInit, Input } from '@angular/core';
import { BasicRecipe } from '../types/BasicRecipe';
import { UserActions } from '../user.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})

export class RecipeCardComponent {

  @Input()
  recipe: BasicRecipe;

  public isFavorite = false;

  constructor(
    
  ) {}
  
  private getBackgroundImage() {
    return {
      'background-image' : 'url(' + this.recipe.image_url + ')'
    };
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

// export interface IRecipeCard{
//   title: string;
//   subtitle? : string;
//   imgUrl? : string;
//   description? : string;
// }

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})

export class RecipeCardComponent implements OnInit {
  // cardInfo: IRecipeCard;

  constructor( ) {

  }

  @Input()
  recipe_id: string;
  
  @Input()
  title: string;

  @Input()
  img: string;

  @Input()
  publisher: string;

  ngOnInit() {
  }

  getBackgroundImage() {
    return {
      'background-image' : 'url(' + this.img + ')'
    };
  }

}

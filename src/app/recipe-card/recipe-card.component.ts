import { Component, OnInit, Input } from '@angular/core';

export interface IRecipeCard{
  title: string;
  subtitle? :string;
  imgUrl? :string;
  description? :string;
}

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})

export class RecipeCardComponent implements OnInit {

  cardInfo: IRecipeCard;

  constructor() { }

  @Input()
  title: string;

  ngOnInit() {
  }

}

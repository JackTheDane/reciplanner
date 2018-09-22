import { Component, OnInit, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { MatDialog } from '@angular/material';
import { RecipePageComponent } from '../recipe-page/recipe-page.component';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})

export class RecipeCardComponent implements OnInit {
  // cardInfo: IRecipeCard;

  constructor( public dialog: MatDialog ) {

  }

  @Input()
  recipe_id: string;
  
  @Input()
  title: string;

  @Input()
  image_url: string;

  @Input()
  social_rank: string;

  @Input()
  publisher: string;

  @Input()
  source_url: string;

  @Input()
  publisher_url: string;

  ngOnInit() {
  }

  getBackgroundImage() {
    return {
      'background-image' : 'url(' + this.image_url + ')'
    };
  }

  openDialog() {
    const dialogRef = this.dialog.open(RecipePageComponent, {
      height: '400px',
      width: '600px',
    });
  }

}

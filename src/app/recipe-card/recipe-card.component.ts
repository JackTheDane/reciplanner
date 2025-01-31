import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})

export class RecipeCardComponent implements OnInit {

  @Input()
  recipe_id: string;
  
  @Input()
  title: string;

  @Input()
  image_url: string;

  @Input()
  social_rank: number;

  @Input()
  publisher: string;

  @Input()
  source_url: string;

  @Input()
  publisher_url: string;

  ngOnInit() {
    this.social_rank = Math.round( this.social_rank );
  }

  getBackgroundImage() {
    return {
      'background-image' : 'url(' + this.image_url + ')'
    };
  }

  getHalfStarVisible(rating) {
    return Math.round(rating) > rating;
  }

  // TODO: Implement custom colours for positive, ok and negative
  // TODO: Implement custom hover colour changes depending on rating

  handleStarClickChange(e) {
    console.log('Click', e);
  }

  handleStarHoverChange(e) {
    console.log('Hover', e);
  }

  getTitleText() {
    if ( this.title.length > 45 ) {
      return this.title.substr(0, 43) + '...';
    }

    return this.title;
  }

}

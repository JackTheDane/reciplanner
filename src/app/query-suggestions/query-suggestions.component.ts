import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

interface Suggestion {
  title: string;
  imageUrl?: string;
  isSelected?: boolean;
}

@Component({
  selector: 'app-query-suggestions',
  templateUrl: './query-suggestions.component.html',
  styleUrls: ['./query-suggestions.component.scss']
})
export class QuerySuggestionsComponent implements OnInit {

  constructor( private router: Router ) {}

  @Input()
  query: string;

  imageFolder = 'assets/images/suggestions';
  
  suggestions: Suggestion[] = [
    {
      title: 'Chicken',
      imageUrl: 'chicken.jpg'
    },
    {
      title: 'Beef',
      imageUrl: 'beef.jpg'
    },
    {
      title: 'Lasagna',
      imageUrl: 'lasagna.jpg'
    },
    {
      title: 'Noodles',
      imageUrl: 'noodles.jpg'
    },
    {
      title: 'Rice',
      imageUrl: 'rice.jpg'
    },
    {
      title: 'Lamb',
      imageUrl: 'lamb.jpg'
    },
    {
      title: 'Burger',
      imageUrl: 'burger.jpg'
    },
    {
      title: 'Pizza',
      imageUrl: 'pizza.jpg'
    },
    {
      title: 'Breakfast',
      imageUrl: 'breakfast.jpg'
    },
    {
      title: 'Smoothie',
      imageUrl: 'smoothie.jpg'
    },
    {
      title: 'Vegan',
      imageUrl: 'vegan.jpg'
    },
    {
      title: 'Pasta',
      imageUrl: 'pasta.jpg'
    }
  ];

  ngOnInit() {
    this.suggestions.forEach(
      (suggestion: Suggestion) => {
        if (suggestion.title === this.query) {
          suggestion.isSelected = true;
        }
      } 
    );
  }

  handleClick(suggestion: Suggestion) {
    this.router.navigate(['/search/' + suggestion.title]);
    this.selectSuggestionCard(suggestion);
  }

  selectSuggestionCard(selectedSuggestion: Suggestion) {
    this.suggestions.forEach((suggestion: Suggestion) => {
      if ( suggestion.isSelected ) {
        suggestion.isSelected = false;
      }

      if ( suggestion.title === selectedSuggestion.title ) {
        suggestion.isSelected = true;
      }
    });
  }

  getBackgroundImage(relativeUrl: string) {
    return `url(${this.imageFolder}/${relativeUrl})`;
  }

}

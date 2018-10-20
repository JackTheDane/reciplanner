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

  suggestions: Suggestion[] = [
    {
      title: 'Chicken'
    },
    {
      title: 'Beef'
    },
    {
      title: 'Lasagna'
    },
    {
      title: 'Asian'
    },
    {
      title: 'Pasta'
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

}

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
    this.updateSelectedSuggestion(this.query);
  }
  
  // TODO: Handle toggleOff
  
  handleClick(suggestion: Suggestion) {
    this.router.navigate(['/search/' + suggestion.title]);
    this.updateSelectedSuggestion(suggestion.title);
  }
  
  updateSelectedSuggestion(suggestionTitle: string) {
    this.suggestions.forEach( (suggestion: Suggestion) => {
        if (suggestion.title !== suggestionTitle) {
          suggestion.isSelected = false;
        } else {
          suggestion.isSelected = true;
        }
      });
  }
}

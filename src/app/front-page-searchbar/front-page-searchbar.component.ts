import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-front-page-searchbar',
  templateUrl: './front-page-searchbar.component.html',
  styleUrls: ['./front-page-searchbar.component.scss']
})

export class FrontPageSearchbarComponent implements OnInit {

  query: string;

  searchBar = new FormGroup({
    query : new FormControl('')
  });
  
  constructor ( private router: Router, private route: ActivatedRoute ) {
    this.route.params.subscribe( params => this.query = params.query ); // Set search query to be the query based via the route parameters
  }

  ngOnInit() {
    if ( this.query !== null && this.query !== '' ) {
      this.searchBar.controls['query'].setValue( this.query );
    }
  }

  handleSubmit() {
    this.query = this.searchBar.value.query;

    if ( this.query !== null && this.query !== '' ) {
      this.router.navigate(['/search/' + this.query]);
    } else {
      this.router.navigate( [''] );
    }
  }
}

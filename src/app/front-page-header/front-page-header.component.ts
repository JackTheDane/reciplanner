import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-page-header',
  templateUrl: './front-page-header.component.html',
  styleUrls: ['./front-page-header.component.scss']
})
export class FrontPageHeaderComponent implements OnInit, OnChanges {

  @Input()
  query: string;

  searchBar = new FormGroup({
    query : new FormControl('')
  });
  
  constructor ( private router: Router ) {}
  
  ngOnChanges(changes: SimpleChanges) {
    const query = changes.query;

    if ( query.previousValue !== query.currentValue ) {
      this.searchBar.controls['query'].setValue( this.query );
    }
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

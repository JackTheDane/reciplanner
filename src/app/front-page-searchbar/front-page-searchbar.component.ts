import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-front-page-searchbar',
  templateUrl: './front-page-searchbar.component.html',
  styleUrls: ['./front-page-searchbar.component.scss']
})

export class FrontPageSearchbarComponent {

  searchBar = new FormGroup({
    query : new FormControl('')
  });


  handleSubmit() {
    console.warn(this.searchBar.value);
  }

}

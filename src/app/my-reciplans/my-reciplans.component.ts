import { Component, OnInit } from '@angular/core';
import { UserActions } from '../user.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { BasicRecipe } from '../types/BasicRecipe';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-reciplans',
  templateUrl: './my-reciplans.component.html',
  styleUrls: ['./my-reciplans.component.scss']
})
export class MyReciplansComponent implements OnInit {

  recipes$: BasicRecipe[];
  filterByString = '';

  filterBar = new FormGroup({
    filter : new FormControl('')
  });

  constructor(
    private userActions: UserActions,
    private ngRedux: NgRedux<IAppState>
  ) {
    this.ngRedux
        .select(res => res.userInfo.savedRecipes)
        .subscribe((savedRecipes: BasicRecipe[]) => {
          console.log(savedRecipes);
          this.recipes$ = savedRecipes;
        },
        error => {
          console.log('Error getting saved recipes ', error);
        }); 
  }

  ngOnInit() {
  }

  handleFilterChange() {
    console.log(this.filterBar.value.filter);
    this.filterByString = this.filterBar.value.filter;
  }

}

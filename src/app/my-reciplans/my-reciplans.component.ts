import { Component, OnInit } from '@angular/core';
import { AppActions } from '../app.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { BasicRecipe } from '../types/recipe-basic';

@Component({
  selector: 'app-my-reciplans',
  templateUrl: './my-reciplans.component.html',
  styleUrls: ['./my-reciplans.component.scss']
})
export class MyReciplansComponent implements OnInit {

  recipes$: BasicRecipe[];

  constructor(
    private appActions: AppActions,
    private ngRedux: NgRedux<IAppState>
  ) {
    // this.appActions.
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

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { MyReciplansComponent } from './my-reciplans/my-reciplans.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: FrontPageComponent
  },
  {
    path: 'page',
    component: FrontPageComponent
  },
  {
    path: 'page/:pageNumber',
    component: FrontPageComponent
  },
  {
    path: 'search',
    component: FrontPageComponent
  },
  {
    path: 'search/:query',
    component: FrontPageComponent
  },
  {
    path: 'search/:query/page',
    component: FrontPageComponent
  },
  {
    path: 'search/:query/page/:pageNumber',
    component: FrontPageComponent
  },
  {
    path: 'my-reciplans',
    component: MyReciplansComponent
  },
  {
    path: 'recipe/:id',
    component: RecipePageComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
